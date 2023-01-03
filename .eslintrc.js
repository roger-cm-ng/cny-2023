module.exports = {
    extends: './eslint-config',
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'object-curly-newline': 'off',
        'max-len': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'function',
                format: ['PascalCase', 'camelCase'],
            },
        ],
    }
};
