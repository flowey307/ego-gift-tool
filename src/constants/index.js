// 饰品类别（用于过滤、右键菜单选择等）
export const CATEGORIES = [
  '烧伤',
  '流血',
  '震颤',
  '破裂',
  '沉沦',
  '呼吸法',
  '充能',
  '斩击',
  '突刺',
  '打击',
  '泛用',
]

export const ALL_CATEGORIES = ['全部', ...CATEGORIES]

// 类别 → 图标文件名的映射
export const CATEGORY_ICON_MAP = {
  烧伤: 'Combustion',
  流血: 'Laceration',
  震颤: 'Vibration',
  破裂: 'Burst',
  沉沦: 'Sinking',
  呼吸法: 'Breath',
  充能: 'Charge',
  斩击: 'Slash',
  突刺: 'Pierce',
  打击: 'Blunt',
}

// 稀有度排序（高 → 低）
export const RARITY_ORDER = ['EX', 'V', 'IV', 'III', 'II', 'I']

// 最大楼层数
export const MAX_FLOOR = 15

// 楼层分区配置
export const FLOOR_RANGES = {
  low: [1, 3],
  mid: [4, 10],
  high: [11, 15],
}

// 平行叠加楼层范围
export const PARALLEL_FLOOR_RANGE = [6, 10]

// 极限模式楼层范围
export const EXTREME_FLOOR_RANGE = [11, 15]

// 楼层网格行定义（用于 FloorGrid）
export const FLOOR_ROWS = [
  { key: 1, label: '第 1 层', floors: [1] },
  { key: 2, label: '第 2 层', floors: [2] },
  { key: 3, label: '第 3 层', floors: [3] },
  { key: 4, label: '第 4 层', floors: [4] },
  { key: 5, label: '第 5 层', floors: [5] },
  { key: 6, label: '平行叠加', floors: [6, 7, 8, 9, 10] },
  { key: 11, label: '极限模式', floors: [11, 12, 13, 14, 15] },
]

// 楼层分区分组配置（用于 PlanningPage 的已选饰品分组）
export const SELECTED_GIFT_GROUPS = [
  { key: 'other', label: '未归类' },
  { key: 'low', label: '1-3层' },
  { key: 'mid', label: '4-10层' },
  { key: 'high', label: '11-15层' },
]

// 卡包配色（最多 15 个卡包）
export const PACK_COLORS = [
  '#e74c3c',
  '#e67e22',
  '#f1c40f',
  '#2ecc71',
  '#1abc9c',
  '#3498db',
  '#9b59b6',
  '#e91e63',
  '#00bcd4',
  '#8bc34a',
  '#ff9800',
  '#795548',
  '#607d8b',
  '#cddc39',
  '#ff5722',
]

// 配方面板自动关闭延迟（毫秒）
export const PANEL_AUTO_CLOSE_DELAY = 5000

// 图标路径模板
export const ICON_BASE_URL = './EgoGiftIcon'
export const BUF_BASE_URL = './Buf'
export const CARD_PACK_BASE_URL = './card_pack'
export const ICON_STORAGE_KEY = (id) => `egogift_icon_${id}`
export const CARDPACK_IMG_STORAGE_KEY = (id) => `cardpack_img_${id}`
