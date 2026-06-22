export type Point = {
  x: number;
  y: number;
};

export type RegionTone = "gold" | "green" | "clay" | "mist" | "focus";

export type LayerRegion = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tone: RegionTone;
};

export type AnalysisLayer = {
  id: string;
  label: string;
  description: string;
  regions: LayerRegion[];
};

export type ReportMarker = {
  id: string;
  title: string;
  shortLabel: string;
  position: Point;
  summary: string;
  strengths: string;
  focus: string;
  suggestion: string;
  relatedRoomIds: string[];
  tooltip: string;
};

export type FamilyMember = {
  role: string;
  age: string;
  profile: string;
  sign: string;
  room: string;
};

export type AnnualFocus = {
  title: string;
  area: string;
  summary: string;
  suggestion: string;
};

export type ScoreItem = {
  label: string;
  value: number;
};

export type RoomSuggestion = {
  title: string;
  summary: string;
};

export const reportIntro = {
  title: "2026住宅空间观察交互报告",
  subtitle: "基于原始户型图的空间关系、家庭成员匹配与年度居住优化建议",
  tags: ["客户交付版", "户型交互分析", "传统文化空间观察参考", "AI辅助整理", "非决策依据"],
  description:
    "这是一套可优化型改善户型。整体基础不差，客餐厅开阔、阳台采光好、功能分区较完整。重点关注西南区域空缺、入户与卫生间关系、局部湿区影响，以及 2026 年几个需要重点整理的空间位置。",
};

export const markers: ReportMarker[] = [
  {
    id: "01",
    title: "整体结论｜中上型可优化户型",
    shortLabel: "整体",
    position: { x: 50, y: 50 },
    summary:
      "这套户型整体属于中等偏上、可优化型改善户型。优点是客餐厅开阔、南向阳台采光通风较好、主卧位置可用，孩子学习空间也有可整理余地。",
    strengths: "格局基础不差，公共区舒展，家庭功能分区较完整。",
    focus: "部分边角空间和门区关系需要处理，年度重点区域需要加强整理。",
    suggestion: "通过入口缓冲、空间补足、湿区隔离、重点区域整理，整体表现还能明显提升。",
    relatedRoomIds: ["living", "balcony", "southwest", "entry"],
    tooltip: "查看整套户型的综合观察",
  },
  {
    id: "02",
    title: "入户玄关｜入口关系需要优化",
    shortLabel: "玄关",
    position: { x: 27, y: 37 },
    summary: "入户玄关面积不大，但承担了入户过渡和第一视觉印象。当前重点在入口秩序感。",
    strengths: "有独立玄关，不是一开门直接进入客厅中心。",
    focus: "入户后与卫生间动线关系较近，容易影响整洁感与第一印象。",
    suggestion: "玄关建议保持明亮、干净、收纳封闭。可增加半高隔断、端景柜或屏风，增强缓冲感。",
    relatedRoomIds: ["entry", "bath-b"],
    tooltip: "入口秩序与视觉缓冲",
  },
  {
    id: "03",
    title: "卫生间A｜公共湿区需保持清爽",
    shortLabel: "卫A",
    position: { x: 76, y: 35 },
    summary: "卫生间A靠近次卧A与公共活动区，是高频使用的公共湿区。",
    strengths: "位置相对独立，服务北侧房间和公共区较方便。",
    focus: "如果长期潮湿、异味重、门常开，会影响周边空间体验。",
    suggestion: "保持干燥、排风、气味管理和门区整洁，视觉上尽量清爽。",
    relatedRoomIds: ["bath-a", "bed-a"],
    tooltip: "公共湿区清爽度",
  },
  {
    id: "04",
    title: "卫生间B｜对卧室舒适度有影响",
    shortLabel: "卫B",
    position: { x: 23, y: 48 },
    summary: "卫生间B靠近次卧C与客厅动线，是本户型需要重点整理的湿区之一。",
    strengths: "方便就近使用。",
    focus: "如果门区无遮挡、湿气控制差，容易影响次卧C的休息体验和整体舒适度。",
    suggestion: "建议做衣柜遮挡、屏风缓冲或加强门区分隔，同时做好排风、除湿和气味管理。",
    relatedRoomIds: ["bath-b", "bed-c"],
    tooltip: "湿区与卧室之间的缓冲",
  },
  {
    id: "05",
    title: "客厅中部｜全家的活动中心",
    shortLabel: "客厅",
    position: { x: 48, y: 56 },
    summary: "客厅是全家互动中心，也是整套房子的视觉核心。中部相对开阔，是这套户型的优势之一。",
    strengths: "尺度不错，聚合感较好，沙发茶几可形成家庭互动中心。",
    focus: "不要堆大件杂物，不要把中心区域堵死。",
    suggestion: "保持中部开阔、灯光柔和、动线顺畅，可以放家庭合照、绿植或柔和装饰。",
    relatedRoomIds: ["living"],
    tooltip: "公共活动中心",
  },
  {
    id: "06",
    title: "南向阳台｜采光通风优势区",
    shortLabel: "阳台",
    position: { x: 47, y: 82 },
    summary: "阳台是本户型的重要加分点，南向采光和通风基础较好。",
    strengths: "有利于提升整体明亮度和空气流通。",
    focus: "2026 年这里属于重点关注区域之一，尽量不要杂乱、不要大动工、不要堆放重杂物。",
    suggestion: "保持整洁、安静、通风。适合做休闲阳台，不适合堆满杂物。",
    relatedRoomIds: ["balcony", "south"],
    tooltip: "采光、通风与南侧整理",
  },
  {
    id: "07",
    title: "厨房｜清洁与通风最重要",
    shortLabel: "厨房",
    position: { x: 25, y: 24 },
    summary: "厨房在西北区域，功能上没问题，但年度观察里这里是需要重点保持清洁和干燥的位置。",
    strengths: "独立厨房，油烟控制相对容易。",
    focus: "热源、湿气、油污如果叠加，会让这一块体验下降。",
    suggestion: "保持通风、干燥、整洁。少堆杂物，减少过强暖色和杂乱感。",
    relatedRoomIds: ["kitchen", "northwest"],
    tooltip: "厨房清洁与通风",
  },
  {
    id: "08",
    title: "主卧｜夫妻居住较合适",
    shortLabel: "主卧",
    position: { x: 65, y: 67 },
    summary: "主卧面积较大，位置相对稳定，整体适合作为夫妻房。",
    strengths: "尺度较好，休息舒适度基础不错。",
    focus: "靠近局部重点区域时，要注意保持安静、整洁，避免被湿区干扰。",
    suggestion: "主卧适合男主人与女主人居住。建议温和配色、整洁布局、减少多余物件。",
    relatedRoomIds: ["primary"],
    tooltip: "主卧舒适度与稳定感",
  },
  {
    id: "09",
    title: "次卧A｜适合大儿子",
    shortLabel: "卧A",
    position: { x: 62, y: 24 },
    summary: "次卧A面积适中，位置较独立，适合作为孩子卧室之一。",
    strengths: "安静度较好。",
    focus: "与卫生间A动线较近，门区秩序要注意。",
    suggestion: "适合大儿子居住，房间保持明亮、整洁，门区尽量避免长期直线干扰感。",
    relatedRoomIds: ["bed-a", "bath-a"],
    tooltip: "北侧卧室使用建议",
  },
  {
    id: "10",
    title: "次卧B｜可住，但更适合做优化后使用",
    shortLabel: "卧B",
    position: { x: 74, y: 53 },
    summary: "次卧B作为儿童房可用，但在年度空间关系里更适合先做小幅优化后再长期使用。",
    strengths: "房间独立，基本功能完整。",
    focus: "需要注意房间安静度、床位布置和周边动线影响。",
    suggestion: "适合小儿子居住，但需保持床底清爽、空间安静、避免房间杂乱。",
    relatedRoomIds: ["bed-b"],
    tooltip: "儿童房安静度",
  },
  {
    id: "11",
    title: "次卧C｜不建议做长期主卧",
    shortLabel: "卧C",
    position: { x: 30, y: 66 },
    summary: "次卧C面积不小，但因为与卫生间B关系较近，并且西南区域本身也是本户型需要重点补足的位置，所以更适合作为次要卧室或灵活房。",
    strengths: "面积尚可，靠近公共区，使用方便。",
    focus: "湿区影响与西南区域空缺感，是它的主要关注点。",
    suggestion: "如果长期住人，需要做好卫生间遮挡、除湿、气味管理和西南区域整理。",
    relatedRoomIds: ["bed-c", "bath-b", "southwest"],
    tooltip: "次卧C与湿区关系",
  },
  {
    id: "12",
    title: "西南区域｜空间补足重点区",
    shortLabel: "西南",
    position: { x: 25, y: 78 },
    summary: "从整套户型外轮廓看，西南区域存在明显空缺感，是本户型最需要关注的结构性问题之一。",
    strengths: "并非完全不可用，仍有后期整理空间。",
    focus: "容易形成空间视觉不完整、功能边界弱、杂物堆积等问题。",
    suggestion: "这里要重点做补足感和秩序感，保持干净、安静、不堆破损物，可通过地毯、柜体、灯光、绿植和功能整理来加强完整感。",
    relatedRoomIds: ["southwest", "bed-c"],
    tooltip: "空间完整性补足",
  },
  {
    id: "13",
    title: "东北区域｜适合作为学习强化区",
    shortLabel: "学习",
    position: { x: 58, y: 29 },
    summary: "东北区域更适合整理成家庭学习、阅读、备考使用的重点区域。",
    strengths: "安静、专注感更容易建立。",
    focus: "不要把这里做成杂物区或纯储藏角。",
    suggestion: "可作为女儿主要学习区，也适合两个孩子写作业。建议增加书桌、台灯、收纳、绿植和安静氛围。",
    relatedRoomIds: ["study", "dining"],
    tooltip: "学习与阅读氛围",
  },
];

const coreRegions: LayerRegion[] = [
  { id: "entry", label: "入口缓冲", x: 25, y: 34, width: 14, height: 12, tone: "gold" },
  { id: "living", label: "公共活动中心", x: 36, y: 43, width: 25, height: 27, tone: "green" },
  { id: "balcony", label: "南向阳台", x: 34, y: 76, width: 27, height: 11, tone: "green" },
  { id: "kitchen", label: "厨房清洁区", x: 19, y: 15, width: 18, height: 16, tone: "mist" },
  { id: "primary", label: "主卧稳定区", x: 64, y: 56, width: 21, height: 25, tone: "gold" },
  { id: "bed-a", label: "次卧A", x: 60, y: 15, width: 20, height: 18, tone: "mist" },
  { id: "bed-b", label: "次卧B", x: 69, y: 45, width: 18, height: 16, tone: "mist" },
  { id: "bed-c", label: "次卧C", x: 20, y: 55, width: 18, height: 22, tone: "clay" },
  { id: "bath-a", label: "卫生间A", x: 78, y: 31, width: 14, height: 12, tone: "clay" },
  { id: "bath-b", label: "卫生间B", x: 17, y: 44, width: 15, height: 12, tone: "clay" },
  { id: "study", label: "学习建议区", x: 49, y: 15, width: 15, height: 20, tone: "focus" },
  { id: "southwest", label: "西南补足", x: 12, y: 72, width: 22, height: 17, tone: "focus" },
  { id: "northwest", label: "西北清洁", x: 18, y: 13, width: 21, height: 20, tone: "clay" },
  { id: "south", label: "南侧整理", x: 34, y: 73, width: 30, height: 15, tone: "focus" },
];

export const layers: AnalysisLayer[] = [
  {
    id: "overview",
    label: "户型总览",
    description: "显示全部点位、基础功能分区与关键空间。",
    regions: coreRegions.filter((region) => ["living", "balcony", "entry", "primary", "southwest"].includes(region.id)),
  },
  {
    id: "relation",
    label: "空间关系",
    description: "观察入口、公共区、卧室、湿区与学习区之间的关系。",
    regions: coreRegions.filter((region) =>
      ["entry", "living", "balcony", "kitchen", "primary", "bed-a", "bed-b", "bed-c", "bath-a", "bath-b", "study"].includes(region.id),
    ),
  },
  {
    id: "annual",
    label: "年度重点关注",
    description: "呈现 2026 年更需要保持清爽、稳定与秩序感的区域。",
    regions: coreRegions.filter((region) => ["south", "northwest", "entry", "southwest"].includes(region.id)),
  },
  {
    id: "family",
    label: "家庭成员匹配",
    description: "显示家庭成员更适合使用的房间与学习区域。",
    regions: [
      { id: "family-couple", label: "夫妻：主卧", x: 64, y: 56, width: 21, height: 25, tone: "gold" },
      { id: "family-son-a", label: "大儿子：次卧A", x: 60, y: 15, width: 20, height: 18, tone: "green" },
      { id: "family-son-b", label: "小儿子：次卧B", x: 69, y: 45, width: 18, height: 16, tone: "green" },
      { id: "family-daughter", label: "女儿：学习区", x: 49, y: 15, width: 15, height: 20, tone: "focus" },
    ],
  },
  {
    id: "optimization",
    label: "优化建议",
    description: "聚焦入口缓冲、空间补足、湿区隔离、学习强化和重点区域整理。",
    regions: coreRegions.filter((region) => ["entry", "southwest", "bath-b", "study", "south"].includes(region.id)),
  },
];

export const familyMembers: FamilyMember[] = [
  { role: "男主人", age: "38岁", profile: "互联网产品经理 / 项目负责人", sign: "龙", room: "建议主卧" },
  { role: "女主人", age: "36岁", profile: "教师 / 教育培训主管", sign: "蛇", room: "建议主卧" },
  { role: "大儿子", age: "10岁", profile: "小学生", sign: "猴", room: "建议次卧A" },
  { role: "小儿子", age: "6岁", profile: "幼儿园大班", sign: "鼠", room: "建议次卧B" },
  { role: "女儿", age: "15岁", profile: "初中生", sign: "兔", room: "建议重点使用东北 / 正东 / 东南学习区" },
];

export const familySummary =
  "这套户型对夫妻居住和孩子学习成长都具备一定基础，但不同成员更适合使用不同空间，后期通过整理和分区优化，居住体验会更稳定。";

export const annualFocus: AnnualFocus[] = [
  {
    title: "年度第一重点关注区",
    area: "正南区域",
    summary: "这一带在 2026 年更适合保持安静、整洁、少动工。尤其阳台和客厅南侧，不建议大装修、大敲打、大堆杂物。",
    suggestion: "保持清洁、安静、整齐，使用白色、金属色、浅色元素更稳妥。",
  },
  {
    title: "健康与清洁关注区",
    area: "西北区域",
    summary: "这一带对应厨房，重点不是神秘化判断，而是提醒热源、油烟、潮湿和卫生状态要特别注意。",
    suggestion: "加强清洁、通风、干燥，减少视觉杂乱。",
  },
  {
    title: "入口秩序关注区",
    area: "正西区域",
    summary: "入户门位于这里，2026 年更需要强调入口整洁、灯光、缓冲和收纳秩序。",
    suggestion: "玄关用柔和灯光、整洁鞋柜、封闭收纳、适当隔断来提升稳定感。",
  },
  {
    title: "空间补足关注区",
    area: "西南区域",
    summary: "这里本身有空缺感，2026 年更需要加强完整性和稳定感。",
    suggestion: "不做杂物角，不堆破损物，用地毯、柜体、灯光、绿植做补足。",
  },
];

export const scoreSummary = {
  title: "综合观察评分",
  total: 79,
  potential: 87,
  level: "中上型可优化户型",
  note: "这套房的强项在客厅、阳台、主卧和学习区整理潜力；主要短板在西南区域空缺、入口关系和局部湿区影响。",
};

export const scoreItems: ScoreItem[] = [
  { label: "户型完整度", value: 78 },
  { label: "空间完整性", value: 70 },
  { label: "门区关系", value: 72 },
  { label: "通风采光", value: 88 },
  { label: "公共区舒展度", value: 84 },
  { label: "年度适配度", value: 76 },
  { label: "家庭成员匹配度", value: 78 },
  { label: "入口秩序感", value: 70 },
  { label: "后期优化空间", value: 87 },
];

export const roomSuggestions: RoomSuggestion[] = [
  { title: "入口缓冲", summary: "玄关建议增加收纳秩序、灯光和视觉缓冲，减少一入户就被湿区影响的感觉。" },
  { title: "西南补足", summary: "西南区域重点做完整性优化，不做杂物角，不堆破旧物。" },
  { title: "湿区隔离", summary: "卫生间B与次卧C之间建议增加衣柜、屏风或门区缓冲，减轻湿气影响。" },
  { title: "南侧整理", summary: "阳台和客厅南侧保持干净安静，不大动工，不堆杂物。" },
  { title: "学习区强化", summary: "东北区域可作为主要学习强化区，适合女儿和孩子日常学习使用。" },
];

export const finalSummary = {
  title: "最终总结",
  body: "这套户型的优势在于公共区开阔、南向阳台采光好、主卧可用、学习区有潜力。它的关注点也很明确：西南区域存在空缺感，入户与湿区关系需要处理，局部空间舒适度和入口秩序感还可以继续提升。",
  highlight: "这套房的重点，不是把空间说得很神秘，而是把入口、湿区、学习区和年度重点区域整理明白。空间一清楚，住起来才会更稳、更舒服。",
};

export const disclaimer =
  "本页面基于原始户型图、空间关系观察、传统文化空间参考与居住整理建议生成，仅用于兴趣学习、客户沟通和空间优化参考，不作为购房、装修、施工、医疗、投资等现实决策的唯一依据。实际调整请结合现场测量、专业设计与家庭真实需求综合判断。";
