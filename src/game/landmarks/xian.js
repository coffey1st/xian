// 西安版方块景点：以少量可复用构件表现秦汉唐与明城墙城市意象。
import { C, lamp, roundTree, pine, statue, stoneLion, paving, railing, paifang } from './common.js'

const BRICK = 0x8d6b4f
const DARK = 0x3c332d
const ROOF = 0x3d4546
const RED = 0x9d2f26
const GOLD = 0xd6a12e
const EARTH = 0xa48767

function tangHall(b, cx, cz, w, d, h, label) {
  b.box(cx - w / 2 - 1, 0, cz - d / 2 - 1, cx + w / 2 + 1, 0.7, cz + d / 2 + 1, C.granite)
  for (const x of [cx - w / 2 + 1.2, cx + w / 2 - 1.2])
    for (const z of [cz - d / 2 + 1.2, cz + d / 2 - 1.2]) b.boxC(x, 0.7, z, 0.65, h - 0.7, 0.65, RED)
  b.box(cx - w / 2, 0.7, cz - d / 2, cx + w / 2, h, cz + d / 2, 0xd6bd8a)
  b.gableRoof(cx - w / 2 - 1.5, cx + w / 2 + 1.5, cz - d / 2 - 1.3, cz + d / 2 + 1.3, h, 3.2, ROOF, { over: 1.2 })
  b.boxC(cx, 1, cz + d / 2 + 0.1, Math.min(4, w * 0.3), 2.8, 0.3, C.darkWood, { mat: 'wood', solid: false })
  if (label) b.sign(label, cx, h - 1, cz + d / 2 + 0.2, 0.7, 0, { bg: '#5f251f', fg: '#f2d48a' })
}

function pagoda(b, floors = 7, scale = 1) {
  b.box(-11 * scale, 0, -11 * scale, 11 * scale, 1.2, 11 * scale, C.granite)
  let y = 1.2
  for (let i = 0; i < floors; i++) {
    const w = (9.2 - i * 0.72) * scale
    const h = (4.2 - Math.min(i, 4) * 0.16) * scale
    b.box(-w, y, -w, w, y + h, w, EARTH)
    b.box(-w - 0.7, y + h, -w - 0.7, w + 0.7, y + h + 0.45, w + 0.7, DARK, { solid: false })
    b.boxC(0, y + 1.15, w + 0.08, 1.7, 2, 0.16, 0x2f2925, { mat: 'wood', solid: false })
    for (const x of [-w * 0.55, w * 0.55]) b.boxC(x, y + h * 0.55, w + 0.1, 0.8, 1.2, 0.12, 0x342c27, { mat: 'wood', solid: false })
    y += h + 0.55
  }
  b.prism(0, 0, y, y + 4 * scale, 1.1 * scale, 1.1 * scale, 8, GOLD, { rx1: 0.2, rz1: 0.2, mat: 'metal', solid: false })
  return y
}

export function buildBigWildGoosePagoda(b, ctx) {
  paving(b, -32, -30, 32, 36, 0)
  const top = pagoda(b, 7, 1)
  b.sign('大雁塔', 0, 3, 11.25, 1.1, 0, { bg: '#4a3024', fg: '#f2d48a' })
  for (const x of [-25, 25]) for (let z = -24; z <= 28; z += 13) roundTree(b, x, 0.15, z, 1.1)
  ctx.platform({ x0: -7, z0: -7, x1: 7, z1: 7, y: top + 0.4 })
  ctx.interact({ x: 0, z: 14, r: 5, label: '登大雁塔', type: 'elevator' })
  ctx.interact({ x: 0, y: top + 0.6, z: 5, r: 8, label: '大雁塔顶层', type: 'elevatorTop' })
  ctx.interact({ x: 10, z: 13, r: 5, label: '了解大雁塔', type: 'info', text: '大雁塔始建于唐永徽三年，是玄奘法师为保存经丝绸之路带回长安的佛经与佛像而主持修建的唐代楼阁式砖塔。' })
  ctx.crowd(0, 20, 24, 10, 14)
}

export function bigPagodaLOD(b) { pagoda(b, 7, 0.72) }

export function buildBellTower(b, ctx) {
  paving(b, -28, -28, 28, 28)
  b.box(-13, 0, -13, 13, 9, 13, 0x9a8d78)
  b.box(-15, 9, -15, 15, 11, 15, C.granite)
  tangHall(b, 0, 0, 24, 24, 21, '钟楼')
  b.gableRoof(-15, 15, -15, 15, 21, 5, 0x31534a, { over: 1.2 })
  b.boxC(0, 26, 0, 1, 2.6, 1, GOLD, { solid: false })
  for (const [x, z] of [[-20, -20], [20, -20], [-20, 20], [20, 20]]) lamp(b, x, 0, z, 6, 'old')
  ctx.interact({ x: 0, z: 17, r: 7, label: '西安钟楼', type: 'culture', id: 'changancenter' })
  ctx.crowd(0, 18, 22, 10, 14)
}

export function buildDrumTower(b, ctx) {
  paving(b, -28, -22, 28, 25)
  b.box(-16, 0, -10, 16, 10, 10, 0xa39782)
  b.box(-18, 10, -12, 18, 12, 12, C.granite)
  tangHall(b, 0, 0, 30, 18, 21, '鼓楼')
  b.gableRoof(-18, 18, -13, 13, 21, 4.5, 0x31534a, { over: 1 })
  for (let x = -12; x <= 12; x += 4) b.prism(x, 12, 12.2, 14.4, 0.8, 0.5, 8, 0xa83228, { solid: false })
  ctx.interact({ x: 0, z: 15, r: 6, label: '聆听暮鼓', type: 'culture', id: 'drum' })
}

function wallGate(b, ctx, gateName, main = false) {
  paving(b, -85, -22, 85, 30)
  b.box(-90, 0, -6, 90, 12, 6, BRICK)
  b.box(-92, 12, -8, 92, 14, 8, C.greyBrick)
  for (let x = -88; x <= 88; x += 5) b.box(x, 14, -8, x + 2.5, 16, -6, BRICK, { solid: false }), b.box(x, 14, 6, x + 2.5, 16, 8, BRICK, { solid: false })
  b.box(-7, 0, -7, 7, 8, 7, 0x242424, { solid: false })
  tangHall(b, 0, 0, 30, 18, 25, gateName)
  b.gableRoof(-18, 18, -13, 13, 25, 5, ROOF, { over: 1 })
  // 城墙根的马道阶梯，玩家也可以直接通过交互登城。
  for (let i = 0; i < 14; i++) b.box(24, i, 20 - i, 31, i + 1, 22 - i, C.greyBrick)
  for (const x of [-65, -42, 42, 65]) lamp(b, x, 14.1, 0, 3.2, 'old')
  ctx.platform({ x0: -88, z0: -7, x1: 88, z1: 7, y: 14.2 })
  ctx.interact({ x: 20, z: 20, r: 7, label: `登${gateName}城墙`, type: 'wallUp', topLocal: { x: 20, y: 14.4, z: 0 } })
  ctx.interact({ x: 20, y: 14.4, z: 0, r: 8, label: `从${gateName}下城`, type: 'wallDown', groundLocal: { x: 20, y: 0.3, z: 20 } })
  ctx.interact({ x: 0, z: 20, r: 7, label: main ? '永宁门入城仪式' : `了解${gateName}`, type: 'culture', id: 'citywall' })
}

export function buildCityWall(b, ctx) { wallGate(b, ctx, '永宁门', true) }
export function buildAnyuanGate(b, ctx) { wallGate(b, ctx, '安远门') }
export function buildChangleGate(b, ctx) { wallGate(b, ctx, '长乐门') }
export function buildAndingGate(b, ctx) { wallGate(b, ctx, '安定门') }

export function buildTerracottaArmy(b, ctx) {
  paving(b, -55, -42, 55, 45)
  b.box(-50, 0, -35, 50, 19, 25, 0xc4beb0, { mat: 'window' })
  b.gableRoof(-52, 52, -38, 28, 19, 8, 0x66808b, { over: 1 })
  b.sign('秦始皇兵马俑博物馆', 0, 14, 25.2, 1.1, 0, { bg: '#3d352e', fg: '#e9d7aa' })
  for (let row = 0; row < 6; row++) for (let col = 0; col < 14; col++) statue(b, -39 + col * 6, 0.2, -27 + row * 7, 0x8b725d, 0.72, col % 5 === 0 ? 1 : 0)
  for (const x of [-46, 46]) stoneLion(b, x, 0.2, 31, 1)
  ctx.interact({ x: 0, z: 31, r: 8, label: '走进一号坑', type: 'culture', id: 'terracotta' })
  ctx.interact({ x: 32, z: 30, r: 4, label: '秦俑文创店', type: 'shop', shop: 'terracotta' })
  ctx.crowd(0, 32, 35, 8, 15)
}

export function buildTangEverbrightCity(b, ctx) {
  paving(b, -28, -80, 28, 80, 0, 0xb99f7c)
  for (let z = -70; z <= 70; z += 14) {
    for (const x of [-20, 20]) {
      lamp(b, x, 0, z, 8, 'old')
      b.boxC(x, 7.8, z, 1.4, 0.8, 1.4, 0xffb040, 'neon')
    }
    if (z % 28 === 0) statue(b, 0, 0, z, 0x8a6438, 1.5, 1)
  }
  tangHall(b, -42, -45, 18, 16, 12, '长安十二时辰')
  tangHall(b, 42, 10, 18, 16, 12, '唐风市集')
  b.sign('大唐不夜城', 0, 7, -76, 1.4, 0, { bg: '#7b1f27', fg: '#ffd36a', glow: true })
  ctx.interact({ x: 0, z: 8, r: 7, label: '观看盛唐巡游', type: 'culture', id: 'tangdance' })
  ctx.interact({ x: 35, z: 10, r: 4, label: '长安食肆', type: 'shop', shop: 'nightmarket' })
  ctx.crowd(0, 0, 24, 70, 26)
}

export function buildMuseum(b, ctx, label = '陕西历史博物馆') {
  paving(b, -40, -32, 40, 36)
  tangHall(b, 0, -2, 58, 34, 14, label)
  tangHall(b, -28, 7, 18, 24, 10)
  tangHall(b, 28, 7, 18, 24, 10)
  ctx.interact({ x: 0, z: 23, r: 7, label: '参观唐代壁画珍品', type: 'culture', id: 'tangart' })
}

export function buildDamingPalace(b, ctx) {
  paving(b, -60, -65, 60, 70)
  tangHall(b, 0, -24, 72, 42, 28, '含元殿')
  tangHall(b, -35, 28, 24, 22, 15, '宣政殿')
  tangHall(b, 35, 28, 24, 22, 15, '紫宸殿')
  for (const x of [-50, 50]) for (let z = -45; z <= 55; z += 18) pine(b, x, 0, z, 1.2)
  ctx.interact({ x: 0, z: 5, r: 8, label: '大明宫国家遗址公园', type: 'culture', id: 'tangpalace' })
}

export function buildHuaqingPalace(b, ctx) {
  paving(b, -45, -35, 45, 45)
  tangHall(b, 0, -12, 36, 24, 15, '华清宫')
  tangHall(b, -28, 16, 18, 16, 11, '海棠汤')
  tangHall(b, 28, 16, 18, 16, 11, '莲花汤')
  b.prism(0, 24, 0.2, 1.1, 11, 7, 16, 0x6ea8b5, { solid: false })
  for (const x of [-38, -20, 20, 38]) roundTree(b, x, 0, 34, 1.2)
  ctx.interact({ x: 0, z: 25, r: 7, label: '聆听华清宫故事', type: 'culture', id: 'huaqing' })
}

export function buildLishanGate(b, ctx) {
  paifang(b, 0, 7, 16, 9, '骊山', C.granite, 0x31534a)
  b.sign('骊山索道', 18, 5, 0, 0.7, 0, { bg: '#5e3b2b', fg: '#fff3c4' })
  b.box(13, 0, -6, 23, 5, 6, 0xbda987)
  ctx.interact({ x: 18, z: 2, r: 4, label: '乘坐骊山索道上山', type: 'cable', dir: 1 })
}

export function buildLishanPeak(b, ctx) {
  b.box(-12, 0, -12, 12, 1, 12, C.granite)
  tangHall(b, 0, 0, 15, 13, 10, '晚照亭')
  for (const [x, z] of [[-18, -10], [18, -6], [-16, 16], [15, 17]]) pine(b, x, 0, z, 1.4)
  ctx.interact({ x: 0, z: 12, r: 7, label: '骊山晚照', type: 'view', id: 'peak' })
  ctx.interact({ x: 9, z: -4, r: 4, label: '乘坐骊山索道下山', type: 'cable', dir: -1 })
}

export function buildQujiangPool(b, ctx) {
  paving(b, -34, -20, 34, 28)
  tangHall(b, -20, -5, 18, 14, 9, '曲江亭')
  for (const x of [-30, -15, 15, 30]) roundTree(b, x, 0, 20, 1.2)
  ctx.interact({ x: 0, z: 18, r: 8, label: '泛舟曲江池', type: 'view' })
}

export function buildQujiangPier(b, ctx, id = 'nanhu') {
  b.box(-10, 0, -6, 10, 5, 0, 0xd7c8aa)
  b.sign(id === 'nanhu' ? '南湖码头' : '曲江池码头', 0, 4, 0.1, 0.75, 0, { bg: '#4c3526', fg: '#f6dfaa' })
  b.box(-3, 0.1, 0, 3, 0.4, 18, C.wood, { mat: 'wood', solid: false })
  railing(b, -3, 0, -3, 18, 0.4, 1, 0x6b6258, 2)
  railing(b, 3, 0, 3, 18, 0.4, 1, 0x6b6258, 2)
  ctx.interact({ x: 0, z: 15, r: 5, label: '登船：曲江夜游', type: 'cruise', pier: id })
}

export function buildMosque(b, ctx) {
  paving(b, -35, -35, 35, 40)
  paifang(b, 0, 7, 18, 10, '化觉巷', C.stone, 0x31534a)
  tangHall(b, 0, -18, 34, 22, 13, '清真大寺')
  for (const x of [-25, 25]) for (const z of [-20, 5, 28]) pine(b, x, 0, z, 1.1)
  ctx.interact({ x: 0, z: 8, r: 7, label: '清真大寺', type: 'culture', id: 'silkroad' })
}

export function buildMarket(b, ctx) {
  paving(b, -72, -18, 72, 20, 0, 0xa98f6c)
  const names = ['泡馍馆', '胡辣汤', '肉夹馍', '凉皮冰峰', 'biangbiang 面', '水盆羊肉', '腊牛肉', '镜糕凉粽', '柿子饼']
  for (let i = 0; i < names.length; i++) {
    const x = -64 + i * 16
    b.box(x - 7, 0, -12, x + 7, 8, 0xceb083)
    b.sign(names[i], x, 5.5, -12.1, 0.65, Math.PI, { bg: '#7b2c25', fg: '#ffd98c' })
  }
  ctx.interact({ x: -58, z: -8, r: 4, label: '老字号泡馍', type: 'shop', shop: 'paomo' })
  ctx.interact({ x: -34, z: -8, r: 4, label: '洒金桥早市', type: 'shop', shop: 'breakfast' })
  ctx.interact({ x: -10, z: -8, r: 4, label: '三秦套餐', type: 'shop', shop: 'snacks' })
  ctx.interact({ x: 14, z: -8, r: 4, label: '关中面馆', type: 'shop', shop: 'noodles' })
  ctx.interact({ x: 38, z: -8, r: 4, label: '清真老味道', type: 'shop', shop: 'halal' })
  ctx.interact({ x: 62, z: -8, r: 4, label: '长安手信', type: 'shop', shop: 'souvenir' })
  ctx.crowd(0, 4, 62, 10, 30)
}

export function buildGenericHistoric(b, ctx, label, cultureId) {
  paving(b, -26, -24, 26, 30)
  tangHall(b, 0, 0, 38, 26, 14, label)
  for (const x of [-20, 20]) stoneLion(b, x, 0.2, 18, 1)
  ctx.interact({ x: 0, z: 20, r: 7, label, type: cultureId ? 'culture' : 'view', id: cultureId })
}

export function buildModernMuseum(b, ctx, label) {
  paving(b, -38, -28, 38, 32)
  b.box(-34, 0, -20, 34, 15, 18, 0x9a8c78)
  b.box(-28, 15, -14, 28, 20, 12, 0xc7b48f)
  b.box(-24, 4, 18, 24, 12, 20, 0x7fa0ab, { mat: 'window' })
  b.sign(label, 0, 11, 20.1, 0.9, 0, { bg: '#43372d', fg: '#f3dfae' })
  ctx.interact({ x: 0, z: 25, r: 7, label, type: 'view' })
}

function glassTower(b, x, z, w, d, h, color = 0x7fa8ba) {
  b.box(x - w / 2, 0, z - d / 2, x + w / 2, h, z + d / 2, color, { mat: 'window' })
  b.box(x - w / 2 - 0.35, h, z - d / 2 - 0.35, x + w / 2 + 0.35, h + 1, z + d / 2 + 0.35, 0xe5edf0, { solid: false })
  for (let y = 4; y < h; y += 6) b.box(x - w / 2 - 0.08, y, z - d / 2 - 0.08, x + w / 2 + 0.08, y + 0.18, z + d / 2 + 0.08, 0x61c5ff, { mat: 'neon', solid: false })
}

export function buildHighTechPark(b, ctx) {
  paving(b, -62, -48, 62, 52, 0, 0x8b949a)
  glassTower(b, -33, -12, 22, 22, 58, 0x6595ad)
  glassTower(b, 0, -20, 26, 24, 82, 0x78a8bd)
  glassTower(b, 35, -8, 20, 20, 48, 0x5d8299)
  b.box(-48, 0, 20, 48, 13, 36, 0xc8ced1)
  b.box(-45, 3, 35.8, 45, 11, 36.2, 0x6ea8c7, { mat: 'window' })
  b.sign('西安高新 · 丝路软件城', 0, 8, 36.4, 0.95, 0, { bg: '#102f48', fg: '#78dcff', glow: true })
  for (const x of [-52, -26, 26, 52]) roundTree(b, x, 0.1, 43, 1.1)
  for (const x of [-48, -24, 0, 24, 48]) lamp(b, x, 0.1, 15, 7, 'modern')
  ctx.interact({ x: 0, z: 43, r: 8, label: '漫游丝路软件城', type: 'view', id: 'hightech' })
  ctx.crowd(0, 40, 48, 8, 18)
}

export function buildNorthStation(b, ctx) {
  paving(b, -78, -44, 78, 52, 0, 0x9aa0a4)
  b.box(-72, 0, -25, 72, 24, 24, 0xd6dde0)
  b.box(-66, 5, 23.8, 66, 20, 24.2, 0x78aabd, { mat: 'window' })
  b.gableRoof(-76, 76, -30, 28, 24, 10, 0xb7c4ca, { over: 1 })
  b.sign('西 安 北 站  XI’AN NORTH', 0, 17, 24.4, 1.05, 0, { bg: '#e7edf0', fg: '#204662', glow: true })
  for (let x = -60; x <= 60; x += 20) {
    b.box(x - 0.18, 0, 34, x + 0.18, 8, 34.35, 0x69777e, { solid: false })
    b.box(x - 4, 7.7, 33.8, x + 4, 8.1, 34.6, 0x2f86c7, { mat: 'neon', solid: false })
  }
  ctx.interact({ x: 0, z: 38, r: 9, label: '西安北站高铁枢纽', type: 'view', id: 'xianbei' })
  ctx.crowd(0, 39, 60, 8, 24)
}

export function buildOlympicCenter(b, ctx) {
  paving(b, -72, -58, 72, 60, 0, 0xa6adb1)
  // 开放式现代体育场，外圈以发光结构梁勾勒。
  b.box(-54, 0, -37, 54, 7, 37, 0xe1e5e7)
  b.box(-44, 7, -28, 44, 18, 28, 0x77a9bd, { mat: 'window' })
  b.box(-34, 7, -19, 34, 19, 19, C.asphalt)
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2
    const x = Math.sin(a) * 58, z = Math.cos(a) * 42
    b.beam(x, 2, z, x * 0.78, 26, z * 0.78, 0.45, i % 2 ? 0x5bc8ff : 0xff6b62, { mat: 'neon' })
  }
  b.sign('西安奥体中心', 0, 14, 37.4, 1.15, 0, { bg: '#173e56', fg: '#ffffff', glow: true })
  for (const x of [-62, -42, 42, 62]) lamp(b, x, 0.1, 50, 9, 'modern')
  ctx.interact({ x: 0, z: 48, r: 9, label: '西安奥体中心', type: 'view', id: 'olympic' })
  ctx.crowd(0, 48, 58, 8, 24)
}
