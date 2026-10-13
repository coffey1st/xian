// 方块长安：美食、文化、纪念品、商店、任务与 NPC 对白。
export const FOODS = {
  paomo: { name: '牛羊肉泡馍', icon: '🥣', price: 38, desc: '掰馍、煮馍、配糖蒜，汤浓肉烂。自己把馍掰成黄豆大小，也是吃泡馍的重要仪式感。' },
  roujiamo: { name: '腊汁肉夹馍', icon: '🥙', price: 15, desc: '白吉馍外酥内软，夹入长时间卤制的腊汁肉，一口下去肉香与麦香交织。' },
  liangpi: { name: '秦镇米皮', icon: '🍜', price: 12, desc: '米皮筋薄细穰，拌入辣子油、醋与时蔬，是关中人四季都爱的清爽味道。' },
  hulutou: { name: '葫芦头泡馍', icon: '🍲', price: 32, desc: '以猪大肠、猪肚和高汤烩馍，汤味醇厚，是西安南院门一带的传统风味。' },
  biangbiang: { name: '油泼 biangbiang 面', icon: '🍝', price: 22, desc: '宽如裤带的手工面配辣椒面、葱花与蒜末，热油一泼，香气瞬间升腾。' },
  guokui: { name: '锅盔', icon: '🫓', price: 10, desc: '关中传统面食，饼厚耐储、麦香扎实，可夹菜、夹肉，也能掰入汤中。' },
  persimmon: { name: '黄桂柿子饼', icon: '🟠', price: 10, desc: '以临潼火晶柿子和面，包入黄桂、核桃等馅料煎制，外皮金黄香甜。' },
  mirrorcake: { name: '镜糕', icon: '🍡', price: 8, desc: '糯米粉蒸成小圆糕，蘸上白糖、果酱与坚果碎，是回民街常见甜点。' },
  zenggao: { name: '甑糕', icon: '🍚', price: 12, desc: '糯米、红枣与蜜枣层层铺叠蒸熟，软糯香甜，适合作为一早的能量补给。' },
  sourplum: { name: '酸梅汤', icon: '🥤', price: 8, desc: '乌梅、山楂、甘草等熬制，酸甜解腻，与西安重口小吃十分相配。' },
  bingfeng: { name: '冰峰汽水', icon: '🍊', price: 5, desc: '橙味汽水是西安餐桌上的经典搭配，与凉皮、肉夹馍组成熟悉的“三秦套餐”。' },
  hulatang: { name: '肉丸胡辣汤', icon: '🥘', price: 12, desc: '牛肉丸、土豆、莲花白等煎煮成浓稠早餐，胡椒香辛暖胃。' },
  shuipen: { name: '水盆羊肉', icon: '🍲', price: 36, desc: '清亮羊肉汤中放入粉丝、香菜和葱花，配上月牙饼，鲜香不膻。' },
  xiaochao: { name: '小炒泡馍', icon: '🌶️', price: 35, desc: '西红柿、黄花、木耳、辣椒和牛肉炒煮掀馍，酸辣醇厚。' },
  honeyzong: { name: '黄桂蜜凉粽', icon: '🍯', price: 10, desc: '糯米粽浇上蜜桂花与玫瑰糖汁，冰凉甜糯，是夏日街头甜品。' },
  youcha: { name: '油茶麻花', icon: '🥨', price: 9, desc: '热油茶里泡入现炸麻花，咸香绵厚，是很有关中味道的传统早点。' },
  saozimian: { name: '岐山臊子面', icon: '🍜', price: 18, desc: '面条薄筋光，汤味酸辣鲜香，臊子、黄花、木耳与豆腐点出五色。' },
  youta: { name: '金线油塔', icon: '🫓', price: 16, desc: '面丝层层盘绕如金线，蒸熟后松软油润，蘸蒜汁食用更清香。' },
  fengzhengrou: { name: '粉蒸牛羊肉', icon: '🥩', price: 28, desc: '牛羊肉裹上炒香面粉与调料蒸制，绵软浓郁，配热茶恰到好处。' },
  curedbeef: { name: '腊牛肉', icon: '🍖', price: 30, desc: '牛肉用老汤与香料卤煮，切片后肉质紧实、咸香醇厚。' }
}

export const CULTURE = {
  changancenter: { name: '长安中轴', icon: '🧭', desc: '钟楼位于古城中心，东南西北四条大街在此交汇。棋盘式街坊与中轴秩序延续着隋唐都城规划的城市传统。' },
  drum: { name: '晨钟暮鼓', icon: '🥁', desc: '古代城市以钟鼓报时，清晨鸣钟、傍晚击鼓。钟楼与鼓楼共同构成西安古城最有辨识度的时间地标。' },
  citywall: { name: '明城墙礼仪', icon: '🏯', desc: '西安城墙形成于明代，城门、箭楼、瓮城和马道组成完整防御体系。南门至今仍举行富有仪式感的入城表演。' },
  calligraphy: { name: '碑林书法', icon: '🖌️', desc: '碑林保存大量汉唐以来碑刻，篆、隶、楷、行、草诸体俱全，是观察中国书法史与石刻艺术的珍贵现场。' },
  terracotta: { name: '秦俑军阵', icon: '🗿', desc: '兵马俑按步兵、弩兵、车兵与骑兵等军阵排列，陶俑面容、发髻和铠甲各不相同，展现秦代军制与雕塑工艺。' },
  tangdance: { name: '盛唐乐舞', icon: '💃', desc: '唐代长安汇聚各地音乐与舞蹈。今天的唐风演艺以鼓乐、舞姿、服饰和灯光重新想象开放包容的国际都会。' },
  tangart: { name: '唐代艺术', icon: '🎨', desc: '唐代壁画、金银器、三彩与陶俑共同呈现自信、丰盈且兼收并蓄的时代审美。' },
  tangpalace: { name: '唐宫礼制', icon: '👑', desc: '大明宫以宏阔中轴和分层院落承载朝会、议政与内廷生活，是理解盛唐国家礼制和建筑尺度的重要遗址。' },
  huaqing: { name: '华清宫故事', icon: '♨️', desc: '骊山温泉被历代经营为离宫园林。唐玄宗、杨贵妃的故事与近现代历史事件，使华清宫拥有多重记忆。' },
  silkroad: { name: '丝绸之路', icon: '🐫', desc: '长安是古代丝绸之路东方起点之一。商旅、宗教、技术、艺术和生活方式在这里相遇，塑造了多元开放的城市气质。' },
  qin: { name: '秦制天下', icon: '⚔️', desc: '秦统一后推行郡县制、统一文字与度量衡。秦始皇陵及其陪葬体系折射出帝国治理、工艺组织和宇宙观。' },
  qinling: { name: '秦岭生态', icon: '🐼', desc: '秦岭是中国重要地理与生态分界线，也是大熊猫、金丝猴、羚牛等珍稀动物的家园。' }
}

export const SOUVENIRS = {
  s_pagoda: { name: '大雁塔积木', icon: '🗼', desc: '登上大雁塔获得。' },
  s_warrior: { name: '秦俑小像', icon: '🗿', desc: '参观兵马俑或在文创店购买。', price: 68 },
  s_tiger: { name: '虎符冰箱贴', icon: '🐯', desc: '秦文化主题纪念品。', price: 28 },
  s_wall: { name: '城墙骑行章', icon: '🏯', desc: '完成城墙探索路线获得。' },
  s_drum: { name: '晨钟暮鼓徽章', icon: '🥁', desc: '打卡钟楼与鼓楼获得。' },
  s_tang: { name: '唐风宫灯', icon: '🏮', desc: '完成雁塔盛唐路线获得。' },
  s_scroll: { name: '碑林拓片卷轴', icon: '📜', desc: '完成碑林文脉路线获得。' },
  s_silk: { name: '丝路骆驼', icon: '🐫', desc: '体验丝绸之路文化获得。', price: 35 },
  s_cable: { name: '骊山索道票根', icon: '🚡', desc: '乘坐骊山索道获得。' },
  s_boat: { name: '曲江夜游船票', icon: '🎫', desc: '乘坐曲江池游船获得。' },
  s_foodie: { name: '长安金筷子', icon: '🥢', desc: '品尝六种西安美食。' },
  s_culture: { name: '古都文化达人证', icon: '📕', desc: '解锁八项西安文化。' },
  s_postcard: { name: '长安十二景明信片', icon: '🖼️', desc: '拍摄十张照片获得。', price: 18 },
  s_badge: { name: '长安旅行家纪念章', icon: '🏅', desc: '完成新手旅行任务获得。' },
  s_metro: { name: '西安地铁纪念卡', icon: '💳', desc: '首次乘坐地铁获得。' }
}

export const SHOPS = {
  paomo: { name: '老字号泡馍馆', greet: '馍要自己慢慢掰，掰得细，煮出来才入味！', items: ['paomo', 'hulutou'] },
  snacks: { name: '三秦套餐铺', greet: '肉夹馍、凉皮、冰峰，来一套正合适！', items: ['roujiamo', 'liangpi', 'bingfeng', 'sourplum'] },
  noodles: { name: '关中面馆', greet: '面要现扯，辣子要热油一激才香！', items: ['biangbiang', 'saozimian', 'guokui', 'youta'] },
  breakfast: { name: '洒金桥早市', greet: '大早上来碗胡辣汤，再就一口甑糕。', items: ['hulatang', 'youcha', 'zenggao'] },
  halal: { name: '清真老味道', greet: '水盆、小炒、腊牛肉，都是慢火熬出来的香。', items: ['shuipen', 'xiaochao', 'curedbeef', 'fengzhengrou'] },
  nightmarket: { name: '长安夜市', greet: '华灯初上，来点古城甜味吧。', items: ['persimmon', 'mirrorcake', 'honeyzong'] },
  souvenir: { name: '长安手信店', greet: '把一份长安记忆带回家吧！', items: ['s_silk', 's_postcard', 's_tiger'] },
  terracotta: { name: '秦俑文创店', greet: '每一尊秦俑都有自己的表情，挑一尊带走吧。', items: ['s_warrior', 's_tiger'] }
}

export const NOVICE = [
  { id: 'n1', title: '拍摄大雁塔', desc: '前往雁塔区，用相机（C 键）拍下大雁塔。', cond: { type: 'photo', id: 'cantontower' }, reward: { money: 100 } },
  { id: 'n2', title: '寻找兵马俑', desc: '前往临潼区，找到秦始皇帝陵博物院兵马俑坑。', cond: { type: 'discover', id: 'chenclan' }, reward: { money: 120, item: 's_warrior' } },
  { id: 'n3', title: '吃一碗泡馍', desc: '到回民街老字号泡馍馆，体验自己掰馍。', cond: { type: 'buy', id: 'paomo' }, reward: { money: 80 } },
  { id: 'n4', title: '完成长安初体验', desc: '登上大雁塔，俯瞰长安中轴。', cond: { type: 'deck' }, reward: { money: 300, item: 's_badge' } }
]

export const QUESTS = [
  { id: 'q_oldcity', district: 'beilin', title: '古城·晨钟暮鼓', desc: '拍摄钟楼、鼓楼、永宁门与碑林', cond: { type: 'photoSet', ids: ['huacheng', 'drumtower', 'beijingroad', 'beilinmuseum'], n: 4 }, reward: { money: 220, item: 's_wall' } },
  { id: 'q_lianhu', district: 'lianhu', title: '莲湖·市井与丝路', desc: '探访回民街、清真大寺与大唐西市', cond: { type: 'discoverSet', ids: ['muslimquarter', 'greatmosque', 'silkroad'], n: 3 }, reward: { money: 200, item: 's_silk' } },
  { id: 'q_yanta', district: 'yanta', title: '雁塔·盛唐风华', desc: '拍摄大雁塔、大唐不夜城、陕历博和大唐芙蓉园', cond: { type: 'photoSet', ids: ['cantontower', 'shamian', 'shaanximuseum', 'tangparadise'], n: 4 }, reward: { money: 250, item: 's_tang' } },
  { id: 'q_tang', district: 'weiyang', title: '未央·千宫之宫', desc: '探访大明宫并解锁唐宫礼制', cond: { type: 'discover', id: 'damingpalace' }, reward: { money: 180, item: 's_scroll' } },
  { id: 'q_qin', district: 'lintong', title: '临潼·秦风骊山', desc: '拍摄兵马俑、华清宫，并登上骊山', cond: { type: 'photoSet', ids: ['chenclan', 'huaqing', 'baiyun'], n: 3 }, reward: { money: 260, item: 's_warrior' } },
  { id: 'q_night', district: 'yanta', title: '曲江·长安夜未央', desc: '夜晚拍摄大唐不夜城，并乘坐一次曲江夜游', cond: { type: 'multi', parts: [{ type: 'nightPhoto', id: 'shamian' }, { type: 'cruise' }] }, reward: { money: 250, item: 's_boat' } },
  { id: 'q_food', title: '长安味道', desc: '品尝六种不同的西安美食', cond: { type: 'foodCount', n: 6 }, reward: { money: 160, item: 's_foodie' } },
  { id: 'q_food_master', title: '碳水之都', desc: '品尝十二种西安美食', cond: { type: 'foodCount', n: 12 }, reward: { money: 320, item: 's_foodie' } },
  { id: 'q_wall', district: 'beilin', title: '城墙·四门巡游', desc: '发现永宁门、安远门、长乐门与安定门', cond: { type: 'discoverSet', ids: ['beijingroad', 'anyuanmen', 'changlemen', 'andingmen'], n: 4 }, reward: { money: 260, item: 's_wall' } },
  { id: 'q_culture', title: '古都文化达人', desc: '解锁八项西安文化图鉴', cond: { type: 'cultureCount', n: 8 }, reward: { money: 180, item: 's_culture' } }
]

export const DAILY_POOL = [
  { id: 'd_photo3', title: '拍摄三个景点', cond: { type: 'dailyPhotos', n: 3 }, reward: { money: 60 } },
  { id: 'd_npc5', title: '和五位路人聊天', cond: { type: 'dailyTalk', n: 5 }, reward: { money: 50 } },
  { id: 'd_district', title: '探索两个城区', cond: { type: 'dailyDistricts', n: 2 }, reward: { money: 60 } },
  { id: 'd_bus', title: '乘坐一次观光巴士', cond: { type: 'dailyCount', key: 'bus', n: 1 }, reward: { money: 40 } },
  { id: 'd_metro', title: '乘坐一次地铁', cond: { type: 'dailyCount', key: 'metro', n: 1 }, reward: { money: 40 } },
  { id: 'd_ebike', title: '骑一次共享电单车', cond: { type: 'dailyCount', key: 'ebike', n: 1 }, reward: { money: 40 } },
  { id: 'd_food2', title: '品尝两种美食', cond: { type: 'dailyCount', key: 'food', n: 2 }, reward: { money: 50 } },
  { id: 'd_night', title: '拍一张长安夜景', cond: { type: 'dailyCount', key: 'nightPhoto', n: 1 }, reward: { money: 50 } },
  { id: 'd_walk', title: '步行一千米', cond: { type: 'dailyCount', key: 'walk', n: 1000 }, reward: { money: 40 } },
  { id: 'd_culture', title: '体验一项古都文化', cond: { type: 'dailyCount', key: 'culture', n: 1 }, reward: { money: 50 } },
  { id: 'd_selfie', title: '拍一张自拍', cond: { type: 'dailyCount', key: 'selfie', n: 1 }, reward: { money: 30 } }
]

export const NPC_TYPES = {
  office: { name: '上班族', weight: 3 }, student: { name: '学生', weight: 2 }, elder: { name: '老人', weight: 2 },
  tourist: { name: '游客', weight: 3 }, kid: { name: '小孩', weight: 1 }, local: { name: '西安街坊', weight: 2 }
}
export const SURNAMES = ['张', '王', '李', '赵', '刘', '马', '杨', '郭', '高', '韩', '白', '杜', '苏', '董', '雷']
export const NICK = { office: ['先生', '女士', '经理', '工'], student: ['同学'], elder: ['大爷', '奶奶', '叔', '姨'], tourist: ['游客'], kid: ['小朋友'], local: ['师傅', '姐', '哥'] }

export const DIALOG = {
  office: ['地铁二号线又从钟楼下面穿过去咧。', '下班去城墙根儿遛一圈，风一吹就舒服了。', '今天小寨人还是多得很。', '周末去陕历博，得早点约票。'],
  student: ['大雁塔晚上亮灯可好看了！', '历史老师说明城墙一圈有十三公里多。', '我最喜欢在书院门逛文创店。', '放假想去秦岭看金丝猴。'],
  elder: ['以前城墙根儿可安静咧。', '娃，泡馍得自己掰，机器切的没灵魂。', '钟楼鼓楼一亮灯，长安味儿就出来了。', '秋天去骊山看晚照，美得很。'],
  tourist: ['第一次来西安，先登城墙还是先去大雁塔？', '兵马俑每一张脸真的都不一样。', '大唐不夜城晚上氛围太好了！', '我准备把西安面食都吃一遍。'],
  kid: ['我想坐城墙自行车！', '兵马俑会不会晚上偷偷换队形呀？', '妈妈说带我去看大熊猫！'],
  local: ['来了西安就甭急，慢慢转。', '肉夹馍配凉皮，再来瓶冰峰。', '西安人说“嘹咋咧”，就是特别好。', '春天风大，出门记得带件外套。']
}

export const WEATHER_LINES = {
  rain: ['下雨咧，快到城门洞里避一避。', '青砖被雨一打，古城颜色更沉了。'],
  typhoon: ['下雪咧！城墙和大雁塔都白了。', '雪天路滑，慢慢走。'],
  night: ['钟楼亮灯咧，夜长安正好看。', '走，去不夜城看演出！', '夜宵来碗泡馍，暖和。']
}

export const LANDMARK_LINES = {
  huacheng: ['钟楼就在古城正中心，四条大街都从这里展开。'], drumtower: ['鼓楼后面就是回民街，晚上可热闹。'],
  beijingroad: ['永宁门是西安南门，登城墙骑车很过瘾。'], cantontower: ['大雁塔和玄奘法师取经的故事有关。'],
  shamian: ['不夜城的演出一场接一场，晚上来最有氛围。'], chenclan: ['仔细看，秦俑的发髻、铠甲和表情都不同。'],
  muslimquarter: ['泡馍要自己掰得细细的，师傅才好煮。'], damingpalace: ['含元殿当年是大唐举行重要朝会的地方。'],
  huaqing: ['华清宫背靠骊山，温泉从古到今都很有名。'], baiyun: ['骊山晚照是关中有名的景致。']
}
