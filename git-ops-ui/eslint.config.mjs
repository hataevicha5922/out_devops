// eslint.config.mjs
import next from 'eslint-config-next';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 1. Next.js правила
  ...next,

  // 2. TypeScript
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  // 3. Prettier: сначала плагин, потом конфиг
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'es5',
          singleQuote: true,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          arrowParens: 'avoid',
          endOfLine: 'lf',
        },
      ],
    },
  },

  // 4. Отключаем конфликты
  prettierConfig,

  // 5. Доп. правила (опционально)
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
