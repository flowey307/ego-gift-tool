# EGO 饰品图鉴工具

> Limbus Company 饰品（Ego Gift）综合管理工具 — 图鉴浏览、卡包管理、楼层规划、合成配方查询

由[@切杂鱼罢了](https://space.bilibili.com/408271440)所作ego饰品图鉴工具重做而成[原视频地址](https://www.bilibili.com/video/BV12U5b6AELY)

## 功能

| 页面         | 说明                                                        |
| ------------ | ----------------------------------------------------------- |
| **饰品图鉴** | 按类别/稀有度浏览 460+ 饰品，支持搜索、筛选、上下文菜单管理 |
| **卡包管理** | 增删卡包、编辑封面、分配楼层、关联饰品                      |
| **卡包饰品** | 按卡包查看/添加/移除饰品，支持标签（如"复刻"）标记          |
| **楼层规划** | 已选饰品按楼层分组 + 楼层分布矩阵可视化                     |
| **合成方式** | 饰品合成配方（材料 → 结果）的增删改查                       |

**核心特性：**

- 悬浮饰品图标 → 右侧显示合成配方 + 所属卡包（可拖拽定位）
- 饰品描述中状态效果标签自动渲染为图标 + 中文翻译，悬浮查看详情
- 全部用户数据（标签、稀有度、自定义饰品等）持久化至 localStorage

## 获取使用

### 免安装网页版（推荐）

前往 [Release](https://github.com/flowey307/ego-gift-tool/releases) 下载最新版的网页版压缩包，解压后双击其中的 `.html` 文件即可在浏览器中打开使用，无需安装任何环境。

### 桌面应用（Windows）

前往 [Release](https://github.com/flowey307/ego-gift-tool/releases) 下载最新版的 `E.G.O饰品图鉴 Setup *.exe`，运行安装后即可从开始菜单/桌面快捷方式启动。与网页版功能一致，无需手动打开浏览器。

### 本地开发

需要 Node.js `^22.18.0` 或 `>=24.12.0`。

```sh
npm install              # 安装依赖

npm run dev              # 启动 Web 开发服务器（localhost:5173）
npm run build            # 生产构建 → dist/（Electron 使用）
npm run build:single     # 构建单文件网页版 → dist-single/（JS/CSS 内联 + 外部图片目录）

npm run electron:dev     # 启动桌面应用（Vite + Electron）
npm run electron:build   # 打包 Windows NSIS 安装包 → release/
```

> `build:single` 会先以 `--mode single` 构建临时产物，再重建一次普通 `dist/`，两者互不影响。
> 单文件模式（`MODE=single`）下路由自动切换为 hash 模式，保证 `file://` 打开可用。
> `electron:build` 会自动先跑 `vite build`，无需手动执行。

### Electron 打包配置要点

`package.json` 的 `build` 字段经过以下优化，改动前请留意：

| 配置                            | 值                | 原因                                                                                                                                                                                           |
| ------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `asar`                          | `true`            | 代码封进 `app.asar`，加快启动（原 `false` 会告警）                                                                                                                                             |
| `asarUnpack`                    | `dist/**/*`       | **必需** —— `electron-main.cjs` 用 `fs.readFile` 读 `dist/`，asar 内的文件无法这样读；Electron 会把 `app.asar/dist/x` 自动重定向到 `app.asar.unpacked/dist/x`，故 `__dirname` 探测逻辑无需改动 |
| `files` 的 `!node_modules/**/*` | 排除              | 主进程只用 Electron 内置模块，vue/pinia 已由 Vite 打进 bundle，运行时用不到（约 −29 MB）                                                                                                       |
| `electronLanguages`             | `zh-CN` / `en-US` | 只保留中英文，其余 53 个语言包不打包（约 −46 MB）                                                                                                                                              |
| `nsis.deleteAppDataOnUninstall` | `false`           | 避免卸载时删掉用户的 localStorage 数据                                                                                                                                                         |

若要新增 `public/` 下的静态资源，注意 `asarUnpack` 只解包 `dist/`，新目录需一并加入。

## 代码质量

```sh
npm run lint             # ESLint + oxlint 检查并自动修复
npm run format           # Prettier 格式化 src/ 目录
```

## 技术栈

```
Vue 3.5     ──┐
              ├──  Composition API + <script setup>
Vite 8.0    ─┤
Pinia 3.0   ─┼── 状态管理（5 个 Store，除 mode.js 外全部基于 localStorage 持久化）
Vue Router 5   ─┤
              │
ESLint 10 + oxlint + Prettier ── 代码检查与格式化
vite-plugin-singlefile ──────── 单文件网页版构建
Electron 43  ────────────────── 桌面端封装
```

## 项目结构

```
├── index.html              # Vite 入口 HTML
├── vite.config.js          # 别名 @ → src、base: './'
├── electron-main.cjs       # Electron 主进程
├── build/single.js         # 单文件网页版构建脚本
├── public/                 # 静态资源（直接以 URL 引用，不进 bundle）
│   ├── EgoGiftIcon/        # 585 张饰品图标
│   ├── Buf/                # 1380 张状态 / 类别图标
│   ├── card_pack/          # 131 张卡包封面
│   ├── fonts/
│   └── icon.png
└── src/
    ├── main.js             # createApp + Pinia + Router
    ├── App.vue             # 顶部导航栏 + onMounted 并行加载三个 store
    ├── router/index.js     # 5 条路由
    ├── data/               # 静态数据（不可变）
    │   ├── gifts.js        # 464 个饰品定义（对象导出：{ version, generated_at, gifts }）
    │   ├── cardPacks.js    # 76 个预设卡包（含 giftIds，卡包→饰品映射已并入）
    │   └── recipes.js      # 59 条预设配方
    ├── stores/             # Pinia Stores
    │   ├── gifts.js        # 饰品 CRUD、类别/搜索过滤
    │   ├── cardPack.js     # 卡包 CRUD、楼层分配、floorDistribution
    │   ├── recipes.js      # 配方 CRUD
    │   ├── userData.js     # 用户偏好（选中、标签、稀有度、类别覆盖、卡包映射）
    │   └── mode.js         # 管理员/游客模式（不持久化，刷新即重置）
    ├── views/              # 页面组件
    ├── components/         # 公共组件
    ├── composables/        # 跨组件逻辑复用
    │   ├── useGiftHelpers.js    # 图标 URL / 名称 / 类别图标 / 卡包封面
    │   ├── useRecipePanel.js    # 拖拽配方面板 + 悬浮计时
    │   └── usePackList.js       # 查找饰品所属卡包
    ├── utils/
    │   ├── statusHelpers.js     # statusIcons / statusTranslations / statusDescriptions + translateStatus()
    │   ├── storage.js           # loadFromLocal / saveToLocal（自动加 egogift_ 前缀）
    │   └── fileHelpers.js       # File → Base64 DataURL
    ├── constants/index.js  # 类别、类别→图标映射、稀有度序、楼层配置、卡包配色、路径模板
    └── styles/main.css
```

### 数据流

```
public/*      静态资源 ──── 直接以 URL 引用

data/*.js     预设数据 ──┐
localStorage  用户数据 ──┼──> stores/* ──> views/* ──> components/*
                       ──┘
```

### 权限

`modeStore.isAdmin` 是唯一权限开关（`mode.js`，非持久化，刷新后回到游客模式），控制：
导航「卡包管理」链接、`ContextMenu` 菜单项、`GiftDetailModal` 稀有度选择、图鉴页「添加饰品」按钮、`RecipePage` 的新增表单与行内操作。
新增管理类 UI 时需自行判断 `isAdmin`，无路由守卫兜底。

## 数据存储

所有用户生成数据存储在浏览器 **localStorage** 中。

`utils/storage.js` 的 `loadFromLocal(key, defaultValue)` / `saveToLocal(key, value)` 会自动加 `egogift_` 前缀：

| 完整键名                        | 用途                                 |
| ------------------------------- | ------------------------------------ |
| `egogift_giftOverrides`         | 覆盖官方饰品数据（名称/类别/描述）   |
| `egogift_customGifts`           | 用户自定义添加的饰品                 |
| `egogift_deletedGiftIds`        | 已删除饰品 ID                        |
| `egogift_recipes`               | 合成配方                             |
| `egogift_cardPacks`             | 自定义卡包                           |
| `egogift_packGifts`             | 卡包→饰品映射                        |
| `egogift_removedPackIds`        | 用户删除的预设卡包（墓碑，防止复活） |
| `egogift_selectedGiftIds`       | 已选饰品（楼层规划）                 |
| `egogift_giftLabels`            | 饰品标签（如"复刻"）                 |
| `egogift_giftRarities`          | 稀有度覆盖（I ~ EX）                 |
| `egogift_giftCategoryOverrides` | 类别覆盖                             |
| `egogift_giftCardPackMap`       | 饰品→卡包（可属多包）                |
| `egogift_hiddenPacks`           | 楼层规划中隐藏的卡包                 |

以下 Base64 图片键不经 `storage.js` 拼接，由 `constants/index.js` 的工厂函数或字面量直接写入：

| 完整键名             | 用途                                             |
| -------------------- | ------------------------------------------------ |
| `egogift_icon_${id}` | 自定义饰品图标（`ICON_STORAGE_KEY(id)`）         |
| `cardpack_img_${id}` | 自定义卡包封面（`CARDPACK_IMG_STORAGE_KEY(id)`） |

> ⚠️ 清除浏览器数据会导致所有用户偏好丢失。

### 卡包预设的合并策略

`loadPacks()` 对「本地数据」与「`data/cardPacks.js` 预设」采用**只增不覆盖**的合并：

| 情况                     | 行为                                             |
| ------------------------ | ------------------------------------------------ |
| 预设里有、本地没有的卡包 | **追加**到列表末尾，并写入预设的 `giftIds` 种子  |
| 本地已有的卡包           | 以用户版本为准（改名、改楼层都不被冲掉）         |
| 用户设为空的 `floors`    | 用预设值补全                                     |
| 预设里删掉的卡包         | **不会**从本地移除                               |
| 用户删掉的预设卡包       | 记入 `egogift_removedPackIds` 墓碑，重开不会复活 |

这样新加卡包/新配方能自动出现在老用户界面里，无需清 localStorage；用户的编辑也不会被版本更新覆盖。

⚠️ 往 `cardPacks.js` 加卡包时，**必须同时在 `public/card_pack/` 放封面图**，文件名为 `<imageKey>.png`，否则卡包列表会出现空白封面。
⚠️ 新卡包的 `giftIds` 只是首次注入的种子。用户改过后就存在 localStorage 里，之后再改预设不会同步 —— 需在管理界面手动改，或清 `egogift_packGifts` 后重载。

## 许可

个人项目，仅供 Limbus Company 玩家社区交流使用。
