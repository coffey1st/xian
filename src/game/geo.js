// 西安地理数据：真实经纬度 → 游戏坐标（核心区 1km ≈ 200 格，远郊压缩）
import { distToSeg } from './util.js'

export const ORIGIN = { lat: 34.255, lon: 108.95 }
export const UPK = 200
const KX = 111.32 * Math.cos((ORIGIN.lat * Math.PI) / 180)
const KZ = 110.574
const CORE_R = 13
const COMPRESS = 0.3

export function compressFactor(lat, lon) {
  const ex = (lon - ORIGIN.lon) * KX, nz = (lat - ORIGIN.lat) * KZ
  return Math.hypot(ex, nz) > CORE_R ? COMPRESS : 1
}

export function project(lat, lon) {
  let ex = (lon - ORIGIN.lon) * KX
  let nz = (lat - ORIGIN.lat) * KZ
  const d = Math.hypot(ex, nz)
  if (d > CORE_R) {
    const f = (CORE_R + (d - CORE_R) * COMPRESS) / d
    ex *= f
    nz *= f
  }
  return { x: ex * UPK, z: -nz * UPK }
}

export function unproject(x, z) {
  let ex = x / UPK, nz = -z / UPK
  const d = Math.hypot(ex, nz)
  if (d > CORE_R) {
    const real = CORE_R + (d - CORE_R) / COMPRESS
    ex *= real / d
    nz *= real / d
  }
  return { lat: ORIGIN.lat + nz / KZ, lon: ORIGIN.lon + ex / KX }
}

const P = (lat, lon) => project(lat, lon)

const RIVER_DATA = [
  { name: '西安护城河', pts: [[34.276, 108.922, 0.035], [34.276, 108.970, 0.035], [34.238, 108.970, 0.035], [34.238, 108.922, 0.035], [34.276, 108.922, 0.035]] },
  { name: '曲江池', pts: [[34.204, 108.976, 0.08], [34.202, 108.982, 0.09], [34.198, 108.985, 0.08], [34.195, 108.980, 0.08], [34.197, 108.974, 0.08], [34.204, 108.976, 0.08]] },
  { name: '浐河', pts: [[34.36, 109.07, 0.11], [34.32, 109.06, 0.13], [34.28, 109.055, 0.15], [34.24, 109.06, 0.16], [34.19, 109.075, 0.18]] },
  { name: '灞河', pts: [[34.39, 109.03, 0.17], [34.35, 109.05, 0.2], [34.31, 109.075, 0.22], [34.27, 109.10, 0.24], [34.22, 109.12, 0.27]] },
  { name: '渭河', pts: [[34.43, 108.75, 0.5], [34.44, 108.86, 0.55], [34.445, 108.98, 0.6], [34.44, 109.10, 0.62], [34.43, 109.22, 0.65]] }
]

export const RIVERS = RIVER_DATA.map((r) => ({ name: r.name, pts: r.pts.map(([lat, lon, w]) => ({ ...P(lat, lon), w: w * UPK * compressFactor(lat, lon) })) }))

const ROAD_DATA = [
  { name: '朱雀大街', w: 15, pts: [[34.276, 108.94], [34.26, 108.94], [34.238, 108.94], [34.218, 108.94], [34.18, 108.94], [34.12, 108.94]] },
  { name: '长安北路', w: 16, pts: [[34.24, 108.953], [34.225, 108.953], [34.205, 108.952], [34.17, 108.95], [34.12, 108.945]] },
  { name: '未央路', w: 16, pts: [[34.276, 108.95], [34.31, 108.95], [34.35, 108.95], [34.39, 108.95], [34.44, 108.95]] },
  { name: '北大街', w: 14, pts: [[34.276, 108.947], [34.262, 108.947]] },
  { name: '南大街', w: 14, pts: [[34.262, 108.947], [34.24, 108.947]] },
  { name: '东大街', w: 14, pts: [[34.262, 108.947], [34.262, 108.97]] },
  { name: '西大街', w: 14, pts: [[34.262, 108.947], [34.262, 108.922]] },
  { name: '雁塔路', w: 13, pts: [[34.255, 108.96], [34.235, 108.96], [34.218, 108.964], [34.20, 108.975]] },
  { name: '友谊路', w: 13, pts: [[34.245, 108.91], [34.245, 108.95], [34.245, 109.0]] },
  { name: '二环南路', w: 16, pts: [[34.225, 108.88], [34.225, 108.94], [34.225, 109.02]] },
  { name: '太华路', w: 13, pts: [[34.262, 108.975], [34.295, 108.975], [34.34, 108.98]] },
  { name: '华清路', w: 14, pts: [[34.275, 108.97], [34.29, 109.05], [34.33, 109.14], [34.365, 109.214], [34.385, 109.278]] },
  { name: '咸宁路', w: 13, pts: [[34.252, 108.97], [34.255, 109.03], [34.27, 109.08]] },
  { name: '曲江路', w: 12, pts: [[34.218, 108.964], [34.207, 108.976], [34.198, 108.982], [34.19, 108.97]] },
  { name: '环城北路', w: 15, pts: [[34.276, 108.922], [34.276, 108.97]] },
  { name: '环城东路', w: 15, pts: [[34.276, 108.97], [34.238, 108.97]] },
  { name: '环城南路', w: 15, pts: [[34.238, 108.97], [34.238, 108.922]] },
  { name: '环城西路', w: 15, pts: [[34.238, 108.922], [34.276, 108.922]] },
  { name: '大唐不夜城步行街', w: 18, ped: true, pts: [[34.218, 108.964], [34.195, 108.964]] }
]

export const ROADS = ROAD_DATA.map((r) => ({ ...r, pts: r.pts.map(([lat, lon]) => P(lat, lon)) }))

export const DISTRICTS = {
  beilin: { name: '碑林区', color: '#b45a3c', theme: '城墙文脉' },
  lianhu: { name: '莲湖区', color: '#d49a45', theme: '市井长安' },
  xincheng: { name: '新城区', color: '#c96d55', theme: '古今交汇' },
  yanta: { name: '雁塔区', color: '#7258a8', theme: '盛唐风华' },
  weiyang: { name: '未央区', color: '#567fb0', theme: '汉唐宫阙' },
  lintong: { name: '临潼区', color: '#9a784b', theme: '秦风骊山' },
  changan: { name: '长安区', color: '#548b55', theme: '终南山水' },
  baqiao: { name: '灞桥区', color: '#4f9b9d', theme: '丝路水岸' }
}

const SEEDS = [
  ['beilin', 34.25, 108.95], ['beilin', 34.24, 108.96], ['lianhu', 34.27, 108.93], ['lianhu', 34.26, 108.92],
  ['xincheng', 34.27, 108.98], ['xincheng', 34.25, 108.99], ['yanta', 34.21, 108.96], ['yanta', 34.19, 108.98],
  ['weiyang', 34.32, 108.95], ['weiyang', 34.39, 108.94], ['lintong', 34.36, 109.21], ['lintong', 34.385, 109.278],
  ['changan', 34.08, 108.9], ['changan', 34.02, 108.98], ['baqiao', 34.28, 109.08], ['baqiao', 34.34, 109.05]
].map(([id, lat, lon]) => ({ id, ...P(lat, lon) }))

export function districtAt(x, z) {
  let best = SEEDS[0], bd = Infinity
  for (const s of SEEDS) {
    const d = (s.x - x) ** 2 + (s.z - z) ** 2
    if (d < bd) { bd = d; best = s }
  }
  return best.id
}

const HILLS = [
  [34.355, 109.215, 85, 220], [34.34, 109.20, 55, 180], [34.38, 109.22, 38, 150],
  [34.02, 108.99, 130, 300], [34.06, 108.91, 105, 280], [34.10, 108.86, 65, 220]
].map(([lat, lon, h, r]) => ({ ...P(lat, lon), h, r }))

export function rawHeight(x, z) {
  let h = 0
  for (const k of HILLS) {
    const d2 = (x - k.x) ** 2 + (z - k.z) ** 2
    if (d2 < k.r * k.r * 6) h += k.h * Math.exp(-d2 / (k.r * k.r * 0.6))
  }
  if (h > 1) h += (Math.sin(x * 0.06) * Math.cos(z * 0.04) + Math.sin((x + z) * 0.028)) * Math.min(4, h * 0.08)
  return h < 0.6 ? 0 : h
}

export function terrainHeight(x, z) {
  let h = rawHeight(x, z)
  if (h > 0) {
    const r = roadAt(x, z, 18)
    if (r) h *= Math.min(1, Math.max(0, (r.d - r.hw + 18) / 18) ** 2)
  }
  return Math.floor(h)
}

const PARKS = [
  [34.296, 108.964, 180], [34.218, 108.964, 75], [34.202, 108.98, 150], [34.245, 108.939, 55],
  [34.276, 109.05, 90], [34.365, 109.214, 180], [34.385, 109.278, 160], [34.06, 108.91, 260]
].map(([lat, lon, r]) => ({ ...P(lat, lon), r }))

export function isPark(x, z) { return PARKS.some((p) => (p.x - x) ** 2 + (p.z - z) ** 2 < p.r * p.r) }

const GRID = 64
function buildSegGrid(lines, widthOf) {
  const grid = new Map()
  for (const line of lines) for (let i = 1; i < line.pts.length; i++) {
    const a = line.pts[i - 1], b = line.pts[i]
    const w = Math.max(widthOf(line, a), widthOf(line, b)) / 2 + 20
    const seg = { ax: a.x, az: a.z, bx: b.x, bz: b.z, wa: widthOf(line, a), wb: widthOf(line, b), line }
    for (let gx = Math.floor((Math.min(a.x, b.x) - w) / GRID); gx <= Math.floor((Math.max(a.x, b.x) + w) / GRID); gx++)
      for (let gz = Math.floor((Math.min(a.z, b.z) - w) / GRID); gz <= Math.floor((Math.max(a.z, b.z) + w) / GRID); gz++) {
        const k = gx + ',' + gz
        const arr = grid.get(k) || []
        arr.push(seg)
        grid.set(k, arr)
      }
  }
  return grid
}

const riverGrid = buildSegGrid(RIVERS, (l, p) => p.w)
const roadGrid = buildSegGrid(ROADS, (l) => l.w)

function querySeg(grid, x, z, pad = 0) {
  const arr = grid.get(Math.floor(x / GRID) + ',' + Math.floor(z / GRID))
  if (!arr) return null
  let best = null
  for (const s of arr) {
    const { d, t } = distToSeg(x, z, s.ax, s.az, s.bx, s.bz)
    const hw = (s.wa + (s.wb - s.wa) * t) / 2 + pad
    if (d < hw && (!best || d - hw < best.m)) best = { seg: s, d, hw, m: d - hw, line: s.line }
  }
  return best
}

export const LAND_OVERRIDES = []
export function addLandOverride(x0, z0, x1, z1) { LAND_OVERRIDES.push({ x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) }) }
function inLandOverride(x, z) { return LAND_OVERRIDES.some((r) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1) }
export function riverAt(x, z, pad = 0) { return querySeg(riverGrid, x, z, pad) }
export function isWater(x, z) { return !!querySeg(riverGrid, x, z) && !inLandOverride(x, z) }
export function roadAt(x, z, pad = 0) { return querySeg(roadGrid, x, z, pad) }
export function isBridge(x, z) { return isWater(x, z) && !!querySeg(roadGrid, x, z) }
export function walkableWater(x, z) { return !isWater(x, z) || !!querySeg(roadGrid, x, z, -0.5) }

export const WATER_Y = -0.7
export const BRIDGE_Y = 0.35

export const BUS_ROUTE = {
  name: '长安观光巴士 1 路',
  pts: [[34.262, 108.947], [34.238, 108.947], [34.225, 108.953], [34.218, 108.964], [34.207, 108.976], [34.198, 108.982]].map(([a, b]) => P(a, b)),
  stops: [
    { name: '钟楼', lat: 34.262, lon: 108.947 }, { name: '永宁门', lat: 34.238, lon: 108.947 },
    { name: '陕西历史博物馆', lat: 34.225, lon: 108.955 }, { name: '大雁塔', lat: 34.218, lon: 108.964 },
    { name: '大唐不夜城', lat: 34.207, lon: 108.964 }, { name: '曲江池', lat: 34.198, lon: 108.982 }
  ].map((s) => ({ ...s, ...P(s.lat, s.lon) }))
}

export const METRO_STATIONS = [
  { id: 'zhonglou', name: '钟楼站', lines: ['2号线', '6号线'], lat: 34.262, lon: 108.947 },
  { id: 'beidajie', name: '北大街站', lines: ['1号线', '2号线'], lat: 34.271, lon: 108.947 },
  { id: 'yongningmen', name: '永宁门站', lines: ['2号线'], lat: 34.239, lon: 108.947 },
  { id: 'xiaozhai', name: '小寨站', lines: ['2号线', '3号线'], lat: 34.225, lon: 108.953 },
  { id: 'dayanta', name: '大雁塔站', lines: ['3号线', '4号线'], lat: 34.218, lon: 108.964 },
  { id: 'datang', name: '大唐芙蓉园站', lines: ['4号线'], lat: 34.207, lon: 108.976 },
  { id: 'daminggong', name: '大明宫站', lines: ['4号线'], lat: 34.295, lon: 108.965 },
  { id: 'banpo', name: '半坡站', lines: ['1号线'], lat: 34.275, lon: 109.047 },
  { id: 'huaqingchi', name: '华清池站', lines: ['9号线'], lat: 34.365, lon: 109.214 },
  { id: 'qinyong', name: '秦陵西站', lines: ['9号线'], lat: 34.379, lon: 109.25 },
  { id: 'beikezhan', name: '西安北站', lines: ['2号线', '4号线', '14号线'], lat: 34.376, lon: 108.939 },
  { id: 'aoti', name: '奥体中心站', lines: ['14号线'], lat: 34.37, lon: 109.02 }
].map((s) => ({ ...s, ...P(s.lat, s.lon) }))

export function cruiseRoute() { return RIVERS.find((r) => r.name === '曲江池').pts.map((p) => ({ x: p.x, z: p.z })) }

export const PIERS = [
  { id: 'nanhu', name: '南湖码头', lat: 34.203, lon: 108.976 },
  { id: 'qujiang', name: '曲江池码头', lat: 34.197, lon: 108.984 }
].map((s) => ({ ...s, ...P(s.lat, s.lon) }))

export function worldBounds() {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity
  for (const s of SEEDS) { x0 = Math.min(x0, s.x); x1 = Math.max(x1, s.x); z0 = Math.min(z0, s.z); z1 = Math.max(z1, s.z) }
  return { x0: x0 - 600, x1: x1 + 600, z0: z0 - 600, z1: z1 + 600 }
}

export const HAIZHU_POLY = []
