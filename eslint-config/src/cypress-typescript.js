module.exports = {
    extends: [
        './cypress',
        './typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'createDefaultProgram': true,
        'project': [
            './tsconfig.json'
        ],
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'modules': true
        }
    }
};
