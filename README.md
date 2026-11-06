# EGO 饰品图鉴工具

> Limbus Company 饰品（Ego Gift）综合管理工具 — 图鉴浏览、卡包管理、楼层规划、合成配方查询

由[@切杂鱼罢了](https://space.bilibili.com/408271440)所作 ego 饰品图鉴工具重做而成
[原视频地址](https://www.bilibili.com/video/BV12U5b6AELY)

## 功能

| 页面         | 说明                                                      |
| ------------ | --------------------------------------------------------- |
| **饰品图鉴** | 按类别/稀有度浏览 460+ 饰品，支持搜索、筛选、右键菜单管理 |
| **卡包管理** | 增删卡包、编辑封面、分配楼层、关联饰品（管理员）          |
| **卡包饰品** | 按卡包查看/添加/移除饰品，支持标签（如"复刻"）标记        |
| **楼层规划** | 已选饰品按楼层分组 + 楼层分布矩阵可视化                   |
| **合成方式** | 饰品合成配方（材料 → 结果）的增删改查                     |

**核心特性：**

- 悬浮饰品图标 → 右侧显示合成配方 + 所属卡包（面板可拖拽定位）
- 饰品描述中的状态效果标签自动渲染为图标 + 中文翻译，悬浮查看详细说明
- 游客 / 管理员双模式，隐藏编辑入口
- 全部用户数据（标签、稀有度、自定义饰品等）保存在浏览器本地，无需联网
- 一键「恢复默认」：清除本地数据并回到初始预设状态

## 获取使用

三种版本功能完全一致，按需选择。

### 在线网页版（无需下载）

直接访问 **https://flowey307.github.io/ego-gift-tool/**

由 GitHub Pages 自动部署，每次推送 `main` 分支即自动更新。适合想直接在浏览器里用的人。

### 免安装网页版（离线可用）

前往 [Release](https://github.com/flowey307/ego-gift-tool/releases) 下载网页版压缩包，解压后双击其中的 `.html` 文件即可在浏览器中打开使用。

整个文件夹需要一起保留 —— 图片等资源是按相对路径加载的，单独拿走 HTML 文件会显示不出图标。

### 桌面应用（Windows）

前往 [Release](https://github.com/flowey307/ego-gift-tool/releases) 下载最新版的 `E.G.O饰品图鉴 Setup *.exe`（约 180 MB），运行安装后即可从开始菜单/桌面快捷方式启动。

安装过程中可自选安装目录。卸载时不会删除你的个人数据。

> 体积主要来自 Electron 运行时。若希望体积更小，优先使用网页版。

## 使用说明

- **模式切换**：右上角按钮在「游客」和「管理」之间切换。游客模式隐藏所有增删改入口，适合日常查看；管理模式开放卡包管理、饰品编辑、配方编辑等。
- **恢复默认**：导航栏最右侧的「恢复默认」按钮会清除全部本地数据并回到初始预设状态（等同全新安装），操作前有二次确认。
- **楼层规划**：支持 1–15 层，其中 6–10 层为「平行叠加」、11–15 层为「极限模式」。
- **数据保存在本地**：所有改动存在浏览器的 localStorage 中，**清除浏览器数据会导致全部偏好丢失**。重要配置建议用页面内的增删改功能维护，不要依赖手动清理浏览器。
- **预设更新自动同步**：官方预设新增的饰品、配方、卡包会在打开页面时自动补进本地，不会覆盖你改过的内容；你主动删除的条目也不会被重新加回来。

## 本地开发

需要 Node.js `^22.18.0` 或 `>=24.12.0`。

```sh
npm install              # 安装依赖

npm run dev              # 启动 Web 开发服务器（localhost:5173）
npm run build            # 生产构建 → dist/
npm run build:single     # 构建单文件网页版 → dist-single/

npm run electron:dev     # 启动桌面应用（Vite + Electron）
npm run electron:build   # 打包 Windows NSIS 安装包 → release/
```

### 单文件网页版构建

`npm run build:single` 会产出 `dist-single/`，内含 `index.html` 与四个资源目录。

```sh
node build/single.js --skip-dist   # 只产出 dist-single/，跳过重建 dist/
```

`--skip-dist` 供 CI 使用 —— GitHub Pages 部署不需要 Electron 用的 `dist/`，跳过可省一次构建。

> 字体只拷贝子集版（`ChineseFont-subset.woff2` / `.ttf`），完整的 `ChineseFont.ttf`（22.8 MB）不再打进产物。

### 部署到 GitHub Pages

推送 `main` 分支即自动部署，workflow 位于 `.github/workflows/deploy-pages.yml`。

```sh
git push origin main
```

部署使用 hash 路由（`single` 模式自动切换），任意路径直接刷新都不会 404。

> 产物约 93 MB，超过 `deploy-pages` 默认的 10 分钟超时上限，workflow 中已放宽到 30 分钟。

### 代码质量

```sh
npm run lint             # ESLint + oxlint 检查并自动修复
npm run format           # Prettier 格式化 src/ 目录
```

## 技术栈

```
Vue 3.5     ──┐
              ├──  Composition API + <script setup>
Vite 8.0    ─┤
Pinia 3.0   ─┼── 状态管理（6 个 Store）
Vue Router 5   ─┤
              │
ESLint 10 + oxlint + Prettier ── 代码检查与格式化
vite-plugin-singlefile ──────── 单文件网页版构建
Electron 43  ────────────────── 桌面端封装
```

## 性能优化

针对首屏加载做过几处针对性处理，改动记录在此便于后续维护。

### 字体子集化

原始字体为 Sarasa Gothic SC，22.8 MB。直接用于 Web 会拖垮首屏 —— 单个 23 MB 请求会占满连接的带宽窗口，后续数百个图标请求全部排队。

用 fontTools 做子集化，保留：

- 源码实际用字 1474 个（缺失 0 个）
- GB2312 一级字库 6762 字全覆盖（用户自定义饰品名不会缺字）
- 常用中文标点与装饰符号

| 文件                        | 体积   | 用途           |
| --------------------------- | ------ | -------------- |
| `ChineseFont.ttf`           | 22.8MB | 完整版，不再引用 |
| `ChineseFont-subset.ttf`    | 3.5MB  | 兼容回退       |
| `ChineseFont-subset.woff2`  | 1.5MB  | 首选           |

`@font-face` 同时声明 woff2 与 ttf，并设 `font-display: swap`，字体未就绪时先用系统字体渲染。

### 图片懒加载

原生 `loading="lazy"` 在图鉴页**无效** —— 466 个饰品格子分布在同一条长滚动流里，Chromium 实测仍会立即发出 431 个请求，全挤在同一条 HTTP/2 连接上形成队头阻塞。

改用 `v-lazy-img` 指令（`src/directives/lazyImg.js`），基于 IntersectionObserver 主动接管 `src` 的设置，只加载进入视口（含 300px 预加载边距）的图片。请求数从 431 降至 92。

> 高延迟网络下 HTTP/2 的队头阻塞更明显。实测同一页面强制 HTTP/1.1 时，12 秒内完成 110 个请求、渲染 446/811 图标；HTTP/2 下仅完成 1 个请求。

## 项目结构

```
├── index.html              # Vite 入口 HTML
├── vite.config.js          # 别名 @ → src
├── electron-main.cjs       # Electron 主进程（起本地 HTTP 服务加载 dist/）
├── build/single.js         # 单文件网页版构建脚本
├── .github/workflows/      # GitHub Pages 自动部署
├── public/                 # 静态资源（以 URL 直接引用，不进 bundle）
│   ├── EgoGiftIcon/        # 饰品图标
│   ├── Buf/                # 状态 / 类别图标
│   ├── card_pack/          # 卡包封面
│   └── fonts/              # 中文字体（子集版 + 完整版）
└── src/
    ├── main.js             # 应用入口
    ├── App.vue             # 导航栏 + 数据加载
    ├── router/index.js     # 5 条路由
    ├── data/               # 静态数据（不可变）
    │   ├── gifts.js        # 饰品定义
    │   ├── cardPacks.js    # 预设卡包（含 giftIds，即卡包→饰品映射）
    │   └── recipes.js      # 预设配方
    ├── stores/             # Pinia Stores
    │   ├── gifts.js        # 饰品 CRUD、类别/搜索过滤、快照合并
    │   ├── cardPack.js     # 卡包 CRUD、楼层分配
    │   ├── recipes.js      # 配方 CRUD
    │   ├── userData.js     # 用户偏好（选中、标签、稀有度等）
    │   ├── mode.js         # 游客 / 管理员模式
    │   └── reset.js        # 恢复默认（清 localStorage + 刷新页面）
    ├── views/              # 页面组件
    ├── components/         # 公共组件
    ├── composables/        # 跨组件逻辑复用
    ├── directives/
    │   └── lazyImg.js      # 图片懒加载指令（IntersectionObserver）
    ├── utils/
    │   ├── statusHelpers.js  # 状态效果数据表 + translateStatus()
    │   ├── storage.js        # localStorage 读写封装
    │   └── fileHelpers.js    # 图片转 Base64
    ├── constants/index.js  # 类别、楼层配置、配色、路径常量
    └── styles/main.css
```

## 数据存储

所有用户生成的数据都存在浏览器 **localStorage**，不上传任何服务器。

以 `egogift_` 为前缀的键：

| 键                              | 用途                               |
| ------------------------------- | ---------------------------------- |
| `egogift_giftsSnapshot`         | 饰品全量快照（数据的唯一基准）     |
| `egogift_giftOverrides`         | 覆盖官方饰品数据（名称/类别/描述） |
| `egogift_customGifts`           | 用户自定义添加的饰品               |
| `egogift_deletedGiftIds`        | 已删除的饰品 ID                    |
| `egogift_recipes`               | 合成配方                           |
| `egogift_removedRecipeIds`      | 已删除的预设配方（墓碑）           |
| `egogift_cardPacks`             | 卡包配置                           |
| `egogift_packGifts`             | 卡包→饰品映射                      |
| `egogift_removedPackIds`        | 已删除的预设卡包（墓碑）           |
| `egogift_removedPackGifts`      | 已移除的预设卡包饰品（墓碑）       |
| `egogift_selectedGiftIds`       | 已选饰品（楼层规划）               |
| `egogift_giftLabels`            | 饰品标签                           |
| `egogift_giftRarities`          | 稀有度覆盖                         |
| `egogift_giftCategoryOverrides` | 类别覆盖                           |
| `egogift_giftCardPackMap`       | 饰品→卡包                          |
| `egogift_hiddenPacks`           | 楼层规划中隐藏的卡包               |

自定义图片以 Base64 存储：`egogift_icon_${id}`（饰品图标）、`cardpack_img_${id}`（卡包封面）。

> ⚠️ 清除浏览器数据会导致所有用户偏好丢失。

> 线上版（GitHub Pages）与本地版的 localStorage 按「域名 + 协议」隔离，两边的数据**不互通**。桌面版走 `http://127.0.0.1:9876`，与网页版的数据也是分开的。

## 许可

个人项目，仅供 Limbus Company 玩家社区交流使用。
