module.exports = {
    plugins: [
        'cypress'
    ],
    extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
        './base',
        './typescript',
        './react',
        './jest',
        './unicorn',
        './jsdoc',
        './import',
        './etc'
    ],
    env: {
        'cypress/globals': true
    },
    rules: {
        'jest/valid-expect': ['off'],
        'jest/valid-expect-in-promise': ['off'],
        'jest/expect-expect': ['off']
    }
};
