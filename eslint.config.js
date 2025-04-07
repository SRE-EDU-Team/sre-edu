import stylistic from '@stylistic/eslint-plugin'
import parser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsEslint from 'typescript-eslint'

export default [
    {
        files: [
            '(api|common|engine|front|localstorage))/**/*.ts?(x)',
            '*.js'
        ],
        languageOptions: {
            parser,
            parserOptions: { project: './tsconfig.json' }
        }
    },
    {
        ignores: [
            'engine/filterExpressionParser/parser.gen.js'
        ]
    },
    ...tsEslint.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
        jsx: true,
        commaDangle: 'never'
    }),
    {
        rules: {
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/jsx-curly-brace-presence': ['error', 'always'],
            '@stylistic/max-statements-per-line': ['error', { max: 2 }]
        }
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'simple-import-sort/imports': 'error'
        }
    },
    {
        languageOptions: {
            parser,
            parserOptions: { project: './tsconfig.json' }
        },
        rules: {
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        }
    }
]