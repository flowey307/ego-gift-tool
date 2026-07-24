# EGO 饰品图鉴工具

> Limbus Company 饰品（Ego Gift）综合管理工具 — 图鉴浏览、卡包管理、楼层规划、合成配方查询

## 功能

| 页面 | 说明 |
|------|------|
| **饰品图鉴** | 按类别/稀有度浏览 450+ 饰品，支持搜索、筛选、上下文菜单管理 |
| **卡包管理** | 增删卡包、编辑封面、分配楼层、关联饰品 |
| **卡包饰品** | 按卡包查看/添加/移除饰品，支持标签（如"复刻"）标记 |
| **楼层规划** | 已选饰品按楼层分组 + 楼层分布矩阵可视化 |
| **合成方式** | 饰品合成配方（材料 → 结果）的增删改查 |

**核心特性：**

- 悬浮饰品图标 → 右侧显示合成配方 + 所属卡包（可拖拽定位）
- 饰品描述中状态效果标签自动渲染为图标 + 中文翻译，悬浮查看详情
- 全部用户数据（标签、稀有度、自定义饰品等）持久化至 localStorage

## 获取使用

### 免安装网页版（推荐）

前往 [Release](https://github.com/flowey307/ego-gift-tool/releases) 下载 `dist-single.7z`，解压后双击 `index.html` 即可在浏览器中打开使用，无需安装任何环境。

### 桌面应用（Windows）

前往 [Release](https://github.com/flowey307/ego-gift-tool/releases) 下载 `E.G.O饰品图鉴 Setup *.exe`，运行安装后即可从开始菜单/桌面快捷方式启动。与网页版功能一致，无需手动打开浏览器。

### 本地开发

需要 Node.js `^22.18.0` 或 `>=24.12.0`。

```sh
npm install              # 安装依赖

npm run dev              # 启动 Web 开发服务器（localhost:5173）
npm run build            # 生产构建

npm run electron:dev     # 启动桌面应用（Vite + Electron）
npm run electron:build   # 打包 Windows NSIS 安装包
```

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
Pinia 3.0   ─┼── 状态管理（5 个 Store，全部基于 localStorage 持久化）
Vue Router 5   ─┤
              │
ESLint 10 + oxlint + Prettier ── 代码检查与格式化
Electron 43  ────────────────── 桌面端封装
```

## 项目结构

```
src/
├── data/                    # 静态数据（不可变）
│   ├── gifts.js             # 450+ 饰品定义
│   ├── cardPacks.js         # 72 预设卡包
│   ├── cardPackGifts.js     # 卡包→饰品映射
│   └── recipes.js           # 59 预设配方
├── stores/                  # Pinia Stores
│   ├── gifts.js             # 饰品 CRUD、类别/搜索过滤
│   ├── cardPack.js          # 卡包 CRUD、楼层分配
│   ├── recipes.js           # 配方 CRUD
│   ├── userData.js          # 用户偏好（选中、标签、稀有度）
│   └── mode.js              # 管理员/游客模式
├── composables/             # 跨组件逻辑复用
│   ├── useGiftHelpers.js    # 图标 URL / 名称 / 类别图标
│   ├── useRecipePanel.js    # 拖拽配方面板 + 悬浮计时
│   └── usePackList.js       # 查找饰品所属卡包
├── views/                   # 页面组件
├── components/              # 公共组件
├── utils/                   # 工具函数
└── constants/               # 共享常量
```

## 数据存储

所有用户生成数据存储在浏览器 **localStorage** 中：

| 键前缀 | 用途 |
|--------|------|
| `egogift_giftOverrides` | 覆盖官方饰品数据（名称/类别/描述） |
| `egogift_customGifts` | 用户自定义添加的饰品 |
| `egogift_deletedGiftIds` | 已删除饰品 ID |
| `egogift_recipes` | 合成配方 |
| `egogift_cardPacks` | 自定义卡包 |
| `egogift_packGifts` | 卡包→饰品映射 |
| `egogift_*` | 用户偏好（选中、标签、稀有度、类别覆盖） |
| `egogift_icon_${id}` | 自定义饰品图标（Base64） |
| `cardpack_img_${id}` | 自定义卡包封面（Base64） |

> ⚠️ 清除浏览器数据会导致所有用户偏好丢失。

## 许可

个人项目，仅供 Limbus Company 玩家社区交流使用。
