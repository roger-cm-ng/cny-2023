/**
 * Plugin etc linting rules.
 * @see https://github.com/cartant/eslint-plugin-etc
 */
module.exports = {
    plugins: [
        'etc'
    ],
    extends: [
        'plugin:etc/recommended'
    ],
    rules: {
        'etc/no-commented-out-code': ['error'],
        'etc/no-const-enum': ['error'],
    }
};
