module.exports = {
    extends: ['impression', 'prettier'],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.dev.config.js'
            }
        }
    },
    globals: {
        __DEV__: false,
        AMap: false
    },
    rules: {
        indent: [
            'error',
            2,
            { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }
        ],
        semi: ['warn', 'never'],
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'no-unused-vars': 1,
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'newline-after-var': 'off',
        'import/imports-first': 'off',
        'react/jsx-no-target-blank': 'off'
    }
}
