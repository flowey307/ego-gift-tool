import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  {
    name: 'app/globals',
    files: ['**/*.cjs', '!release/**', 'electron-main.cjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    name: 'app/globals',
    files: ['**/*.cjs', '!release/**', 'electron-main.cjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/release/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // ===== 新增：自定义规则覆盖 =====
  {
    name: 'app/custom-rules',
    files: ['**/*.{vue,js,mjs,jsx}'],
    rules: {
      // 将 no-unused-vars 设为警告级别，并忽略以下划线开头的参数
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // 如果你觉得完全不需要这个检查，也可以直接设为 'off'
      // 'no-unused-vars': 'off',
    },
  },
  // ===== 新增结束 =====

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
])
