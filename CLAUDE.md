# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ego-gift-tool is a Vue 3 + Vite single-page application for managing "Ego Gifts" (饰品) from the game Limbus Company. It provides gift compendium browsing, card pack management, floor planning, and recipe/synthesis tracking — all persisted in localStorage.

## Commands

```sh
npm install                                 # Install dependencies
npm run dev                                 # Start Vite dev server
npm run build                               # Build for production
npm run preview                             # Preview production build
npm run lint                                # Run ESLint + oxlint with auto-fix
npm run format                              # Format src/ with Prettier
npm run electron:dev                        # Start Vite dev server + Electron desktop app
npm run electron:prod                       # Build + launch Electron with production assets
npm run electron:build                      # Build + package as Windows installer (NSIS)
```

Electron entry point: [electron-main.cjs](electron-main.cjs) — spawns a local HTTP server on port `9876` (serving `dist/` static files), loads the page via `BrowserWindow`. Uses `asar: false` for Windows NSIS target.

Node version requirement: `^22.18.0 || >=24.12.0`

No test framework is configured for this project.

## Architecture

### Routing & Layout

- [App.vue](src/App.vue) — Root component with sticky `<nav>` bar (5 links + admin toggle) and `<router-view>`. Loads all Pinia stores on mount.
- [router/index.js](src/router/index.js) — 5 routes: `/`, `/cardpack`, `/packgifts`, `/planning`, `/recipe`. Uses `createWebHistory` with scroll restoration.
- [main.js](src/main.js) — Bootstrap: creates Vue app, registers Pinia + Router, mounts `#app`.

### Pages (views)

| Route | File | Purpose |
|-------|------|---------|
| `/` | [CompendiumPage.vue](src/views/CompendiumPage.vue) | Gift catalog with category filter, search, rarity grouping, admin CRUD, context menu, draggable recipe hover panel |
| `/cardpack` | [CardPackPage.vue](src/views/CardPackPage.vue) | Card pack gallery with cover images, floor selection (1-15, parallel/extreme toggles), gift association |
| `/packgifts` | [PackGiftsPage.vue](src/views/PackGiftsPage.vue) | Per-card-pack gift management: search+add gifts, labels ("复刻"), recipe hover panel |
| `/planning` | [PlanningPage.vue](src/views/PlanningPage.vue) | Floor planning: selected gifts grouped by floor tier, draggable recipe/kit panel, FloorGrid component |
| `/recipe` | [RecipePage.vue](src/views/RecipePage.vue) | Recipe editor: form with gift search dropdowns for materials → result, sortable recipe list |

### Components

- [GiftCard.vue](src/components/GiftCard.vue) — Reusable gift icon tile (shows rarity badge, category icon, icon image). Emits click/contextmenu/hover.
- [GiftDetailModal.vue](src/components/GiftDetailModal.vue) — Version toggle + rarity selection + description with status icon rendering + recipe list.
- [ContextMenu.vue](src/components/ContextMenu.vue) — Context menu with add, label, card pack assignment, category change, edit, delete.
- [FloorGrid.vue](src/components/FloorGrid.vue) — Matrix table: rows = floor tiers (1, 2, 3, 4, 5, parallel 6-10, extreme 11-15), columns = card packs, with rowspan merging.
- [CardPackCover.vue](src/components/CardPackCover.vue) — Card pack cover thumbnail with editable name on double-click.
- [RecipePanel.vue](src/components/RecipePanel.vue) — Draggable hover panel showing synthesis recipes and card pack membership.

### Composables

- [useRecipePanel.js](src/composables/useRecipePanel.js) — Draggable recipe hover panel logic with hover timer auto-close (5s delay). Shared across CompendiumPage, PlanningPage, and PackGiftsPage.
- [useGiftHelpers.js](src/composables/useGiftHelpers.js) — Gift icon URL resolution (`localStorage` → `/EgoGiftIcon/${id}.png` fallback), gift name/lookup helpers, card pack image loading, and category icon resolution.
- [usePackImages()](src/composables/useGiftHelpers.js) — Extracted from useGiftHelpers; manages pack cover image loading from `localStorage` or `public/card_pack/`.
- [useCategoryIcon()](src/composables/useGiftHelpers.js) — Resolves category icon URLs based on `CATEGORY_ICON_MAP` constant.

### State (Pinia stores)

All stores load from static data + localStorage overrides on mount (triggered in App.vue).

| Store | File | Key State |
|-------|------|-----------|
| `useGiftsStore` | [stores/gifts.js](src/stores/gifts.js) | `gifts`, `filteredGifts` (computed), `activeCategory`, `searchQuery`. Merges raw gift data with localStorage overrides/custom gifts/deleted IDs. Admin CRUD via `addGift`, `updateGift`, `removeGift`. |
| `useCardPackStore` | [stores/cardPack.js](src/stores/cardPack.js) | `cardPacks`, `packGifts` (packId → giftId[] map), `floorDistribution` (computed). Auto-merges saved floors from presets if empty. CRUD for packs and gift assignments. |
| `useRecipesStore` | [stores/recipes.js](src/stores/recipes.js) | `recipes` array. CRUD + `moveRecipe`/`insertRecipeAt`/`updateRecipe`. Prefilled from data/recipes.js if localStorage is empty. |
| `useUserDataStore` | [stores/userData.js](src/stores/userData.js) | `selectedGiftIds`, `giftLabels`, `giftRarities`, `giftCategoryOverrides`, `giftCardPackMap`. User preferences persisted in localStorage. Supports multi-pack membership. |
| `useModeStore` | [stores/mode.js](src/stores/mode.js) | `isAdmin` (default `true`), `toggle()`. Controls admin vs visitor visibility for CRUD features. |

### Data layer

- [data/gifts.js](src/data/gifts.js) — ~300+ Ego gift definitions (id, name, category, descriptions for base/+ /++, defaultRarity). ~295KB.
- [data/cardPacks.js](src/data/cardPacks.js) — ~70 predefined card packs with id, name, imageKey, floors arrays.
- [data/cardPackGifts.js](src/data/cardPackGifts.js) — Default gift assignment per card pack (keyed by pack `imageKey`).
- [data/recipes.js](src/data/recipes.js) — ~59 recipe entries (materialIds → resultId).
- [constants/index.js](src/constants/index.js) — Shared constants: `CATEGORIES`, `RARITY_ORDER`, `FLOOR_ROWS`, `PACK_COLORS`, `SELECTED_GIFT_GROUPS`, storage key templates (`ICON_BASE_URL`, `CARD_PACK_BASE_URL`), and floor range configs.
- [utils/statusHelpers.js](src/utils/statusHelpers.js) — `statusIcons` map, `statusTranslations` (Chinese), `statusDescriptions`, and `translateStatus()` function that converts `[StatusKey]` markers in descriptions to `<img>` + translated text.

### Storage layer

- [utils/storage.js](src/utils/storage.js) — `loadFromLocal(key, default)` / `saveToLocal(key, value)` wrapping localStorage with `egogift_` prefix and JSON parse/error handling.

localStorage key patterns:
| Prefix | Used By | Example |
|--------|---------|---------|
| `egogift_` | Generic store data | `egogift_giftOverrides`, `egogift_recipes`, `egogift_packGifts` |
| `egogift_icon_${id}` | Custom gift icon (base64) | `egogift_icon_9191` |
| `cardpack_img_${id}` | Custom card pack cover (base64) | `cardpack_img_The Outcast` |

### Static assets

- `public/EgoGiftIcon/` — Gift icon PNGs (named by ID, e.g. `9191.png`)
- `public/Buf/` — Status effect icons (e.g. `Combustion.png`, `Vibration.png`)
- `public/card_pack/` — Card pack cover images (e.g. `Miracle in District 20.png`)
- `public/fonts/ChineseFont.ttf` — Custom Chinese font (loaded via `@font-face` as `LimbusFont`)

### Build configuration

- [vite.config.js](vite.config.js) — `base: './'` (relative paths for Electron static serving), `@` alias for `src/`, Vue DevTools disabled in production mode.

## Key patterns to follow

- All data persistence goes through Pinia stores using `loadFromLocal`/`saveToLocal` from `utils/storage.js` with the `egogift_` prefix.
- Icon URLs follow a two-tier resolution: check `localStorage.getItem(ICON_STORAGE_KEY(id))` for custom base64, fall back to `${ICON_BASE_URL}/${id}.png`.
- Admin mode toggle (`modeStore.isAdmin`) controls visibility of CRUD operations, rarity selection, and context menu edit options.
- Recipe hover panel is shared across multiple pages via the `useRecipePanel()` composable: appears on gift hover, draggable, auto-closes after 5 seconds.
- Description rendering uses `translateStatus()` to convert `[StatusKey]` markers into translated status icons + text with Chinese labels.
- Store initialization merges static data with localStorage overrides on mount in [App.vue](src/App.vue). Gift data also tracks `isCustom` flag for new gifts vs imported overrides.
- Cards packs use `imageKey` as the primary identifier (often different from `id`). Card pack gift assignments are keyed by `imageKey` in the default data.
- The Electron build serves built assets via a custom HTTP server on port 9876, not Vite's dev server. `electron-main.cjs` handles static file serving with URL decoding for filenames containing spaces.
