// 方块长安景点注册表：经纬度、图鉴文字与建模函数。
import {
  buildBigWildGoosePagoda, bigPagodaLOD, buildBellTower, buildDrumTower, buildCityWall,
  buildTerracottaArmy, buildTangEverbrightCity, buildMuseum, buildDamingPalace,
  buildHuaqingPalace, buildLishanGate, buildLishanPeak, buildQujiangPool, buildQujiangPier,
  buildMosque, buildMarket, buildGenericHistoric, buildModernMuseum
} from './xian.js'

const historic = (name, culture) => (b, ctx) => buildGenericHistoric(b, ctx, name, culture)
const museum = (name) => (b, ctx) => buildModernMuseum(b, ctx, name)
const pier = (id) => (b, ctx) => buildQujiangPier(b, ctx, id)

export const LANDMARKS = [
  { id: 'huacheng', name: '西安钟楼', alias: '古城中心', district: 'beilin', grade: 'S', lat: 34.2619, lon: 108.9467, rect: [32, 32], focusY: 25, build: buildBellTower,
    desc: '西安钟楼位于明城墙内东西南北四条大街交汇处，始建于明洪武年间，是西安城市中轴与古城天际线的重要标志。' },
  { id: 'drumtower', name: '西安鼓楼', alias: '晨钟暮鼓', district: 'lianhu', grade: 'S', lat: 34.2612, lon: 108.9432, rect: [34, 28], focusY: 24, build: buildDrumTower,
    desc: '鼓楼始建于明洪武十三年，与钟楼东西相望。高台重檐建筑曾以击鼓报时，“晨钟暮鼓”延续着古都生活节律。' },
  { id: 'beijingroad', name: '西安城墙·永宁门', alias: '南门', district: 'beilin', grade: 'S', lat: 34.2378, lon: 108.9468, rect: [95, 34], focusY: 24, photoR: 520, build: buildCityWall,
    desc: '西安城墙是中国现存规模最大、保存最完整的古代城垣之一。永宁门是南城门，可登城步行或骑行，俯瞰城内棋盘路网。' },
  { id: 'beilinmuseum', name: '西安碑林博物馆', alias: '石质书库', district: 'beilin', grade: 'A', lat: 34.2506, lon: 108.9525, rect: [30, 34], focusY: 14, build: historic('西安碑林博物馆', 'calligraphy'),
    desc: '碑林以收藏、研究和陈列历代碑刻、墓志与石刻艺术著称，被誉为“石质书库”和“书法艺术故乡”。' },
  { id: 'shuyuanmen', name: '书院门文化街', district: 'beilin', grade: 'B', lat: 34.2495, lon: 108.9489, rect: [42, 20], focusY: 8, build: historic('书院门', 'calligraphy'),
    desc: '书院门因关中书院得名，街巷聚集文房四宝、碑帖拓片、印章和书画，是感受西安书法文化的经典去处。' },
  { id: 'muslimquarter', name: '回民街', alias: '北院门', district: 'lianhu', grade: 'A', lat: 34.2652, lon: 108.9407, rect: [58, 26], focusY: 8, build: buildMarket,
    desc: '回民街泛指钟鼓楼西北侧多条历史街巷，清真饮食与市井生活交织，泡馍、肉夹馍、凉皮、镜糕香气一路相随。' },
  { id: 'greatmosque', name: '西安化觉巷清真大寺', district: 'lianhu', grade: 'A', lat: 34.2648, lon: 108.9373, rect: [40, 42], focusY: 14, build: buildMosque,
    desc: '化觉巷清真大寺将中国传统院落布局、木构建筑与伊斯兰文化融为一体，是丝绸之路多元文明交流的见证。' },
  { id: 'cantontower', name: '大雁塔', alias: '慈恩寺塔', district: 'yanta', grade: 'S', lat: 34.2173, lon: 108.9641, rect: [40, 42], focusY: 34, photoR: 900, lod: bigPagodaLOD, lodAlways: true, build: buildBigWildGoosePagoda,
    desc: '大雁塔始建于唐永徽三年，由玄奘主持修建，用于保存经丝绸之路带回长安的佛经与佛像，是盛唐长安的文化坐标。', tip: '登塔远眺长安中轴，夜晚向南漫步大唐不夜城。' },
  { id: 'shamian', name: '大唐不夜城', alias: '盛唐天街', district: 'yanta', grade: 'S', lat: 34.2048, lon: 108.9643, rect: [40, 90], focusY: 12, photoR: 650, build: buildTangEverbrightCity,
    desc: '大唐不夜城以大雁塔为北端，沿唐文化主题步行街展开。夜幕下的灯组、雕塑、演艺与仿唐建筑共同营造盛唐长安意象。' },
  { id: 'shaanximuseum', name: '陕西历史博物馆', alias: '古都明珠', district: 'yanta', grade: 'S', lat: 34.2252, lon: 108.9552, rect: [48, 40], focusY: 16, build: buildMuseum,
    desc: '陕西历史博物馆以周秦汉唐文物见长，建筑取唐风中央殿堂、四隅崇楼格局，系统展示陕西悠久而厚重的历史。' },
  { id: 'tangparadise', name: '大唐芙蓉园', district: 'yanta', grade: 'A', lat: 34.2070, lon: 108.9765, rect: [44, 42], focusY: 18, build: historic('大唐芙蓉园·紫云楼', 'tangdance'),
    desc: '大唐芙蓉园以盛唐皇家园林为灵感，楼阁、水景与夜间演艺相映成趣，是体验唐风审美的主题文化景区。' },
  { id: 'qujiang', name: '曲江池遗址公园', alias: '曲江流饮', district: 'yanta', grade: 'A', lat: 34.1985, lon: 108.9815, rect: [38, 30], focusY: 8, build: buildQujiangPool,
    desc: '曲江池自秦汉以来就是长安重要风景地，唐代尤为兴盛。今日园区以水岸、亭台与绿地再现“曲江流饮”的城市记忆。' },
  { id: 'nanhu_pier', name: '南湖码头', hidden: true, district: 'yanta', grade: 'B', lat: 34.203, lon: 108.976, rect: [14, 12], build: pier('nanhu') },
  { id: 'qujiang_pier', name: '曲江池码头', hidden: true, district: 'yanta', grade: 'B', lat: 34.197, lon: 108.984, rect: [14, 12], build: pier('qujiang') },
  { id: 'smallpagoda', name: '小雁塔', alias: '荐福寺塔', district: 'beilin', grade: 'A', lat: 34.2447, lon: 108.9392, rect: [34, 34], focusY: 28, build: historic('小雁塔', 'silkroad'),
    desc: '小雁塔建于唐景龙年间，塔形秀丽，历经地震仍保存至今。“雁塔晨钟”曾列关中八景。' },
  { id: 'damingpalace', name: '大明宫国家遗址公园', alias: '千宫之宫', district: 'weiyang', grade: 'S', lat: 34.2955, lon: 108.9650, rect: [72, 78], focusY: 30, photoR: 650, build: buildDamingPalace,
    desc: '大明宫是唐代帝国的重要宫城，含元殿、宣政殿、紫宸殿构成宏阔中轴。遗址公园以考古保护和展示讲述盛唐国家礼制。' },
  { id: 'chenclan', name: '秦始皇帝陵博物院·兵马俑', alias: '世界第八大奇迹', district: 'lintong', grade: 'S', lat: 34.3853, lon: 109.2784, rect: [64, 54], focusY: 22, photoR: 750, build: buildTerracottaArmy,
    desc: '兵马俑坑是秦始皇陵大型陪葬坑，陶俑、陶马按军阵排列，真实呈现秦代军队的组织、装备与雕塑艺术。' },
  { id: 'qinshihuang', name: '秦始皇陵', district: 'lintong', grade: 'A', lat: 34.3817, lon: 109.2538, rect: [40, 38], focusY: 16, build: historic('秦始皇陵', 'qin'),
    desc: '秦始皇陵是中国历史上第一位皇帝嬴政的陵墓，陵园布局宏大，兵马俑坑只是其庞大地下世界的一部分。' },
  { id: 'huaqing', name: '华清宫', alias: '华清池', district: 'lintong', grade: 'S', lat: 34.3652, lon: 109.2143, rect: [52, 46], focusY: 18, build: buildHuaqingPalace,
    desc: '华清宫依骊山而建，以温泉资源和唐代皇家离宫闻名。宫苑、汤池与近现代历史遗迹共同构成层次丰富的叙事。' },
  { id: 'baiyungate', name: '骊山索道下站', district: 'lintong', grade: 'B', lat: 34.3550, lon: 109.2070, rect: [30, 20], focusY: 10, foundation: true, build: buildLishanGate,
    desc: '骊山是秦岭北侧支脉，山势秀美，与华清宫、秦始皇陵共同构成临潼最具代表性的历史山水。' },
  { id: 'baiyun', name: '骊山·晚照亭', alias: '骊山晚照', district: 'lintong', grade: 'A', lat: 34.3460, lon: 109.2180, rect: [24, 24], focusY: 12, foundation: true, build: buildLishanPeak,
    desc: '登骊山可俯瞰华清宫与渭河平原，夕阳为山体镀上暖色，“骊山晚照”是关中著名景观。' },
  { id: 'banpo', name: '西安半坡博物馆', district: 'baqiao', grade: 'A', lat: 34.2762, lon: 109.0480, rect: [42, 34], focusY: 18, build: museum('西安半坡博物馆'),
    desc: '半坡遗址是新石器时代仰韶文化聚落遗址，展示半地穴式房屋、陶器、生产工具与早期聚落生活。' },
  { id: 'silkroad', name: '大唐西市', alias: '丝路起点意象', district: 'lianhu', grade: 'A', lat: 34.2520, lon: 108.9050, rect: [46, 34], focusY: 14, build: historic('大唐西市', 'silkroad'),
    desc: '唐长安西市是重要国际贸易市场，商旅、货物与文化在此汇聚。今日大唐西市延续丝路主题展示与城市商业。' },
  { id: 'chimelong', name: '秦岭野生动物园', district: 'changan', grade: 'A', lat: 34.0670, lon: 108.8660, rect: [58, 44], focusY: 10, foundation: true, build: historic('秦岭野生动物园', 'qinling'),
    desc: '秦岭野生动物园位于秦岭北麓，以山地生态为背景，展示大熊猫、金丝猴、羚牛等多种动物。' },
  { id: 'cuihuashan', name: '翠华山', alias: '终南独秀', district: 'changan', grade: 'A', lat: 33.9980, lon: 109.0020, rect: [28, 24], focusY: 14, foundation: true, build: historic('翠华山', 'qinling'),
    desc: '翠华山位于秦岭北麓，以山崩地貌、天池与峰林景观著称，是西安近郊重要的自然体验目的地。' },
  { id: 'wetland', name: '浐灞国家湿地公园', district: 'baqiao', grade: 'B', lat: 34.3400, lon: 109.0600, rect: [54, 44], focusY: 8, build: museum('浐灞生态展馆'),
    desc: '浐灞水系是西安东部重要生态廊道，湿地、公园与城市公共空间共同展现古都面向自然与未来的一面。' }
]

export const GRADE_INFO = { S: '重点还原', A: '主要景点', B: '区域氛围' }
