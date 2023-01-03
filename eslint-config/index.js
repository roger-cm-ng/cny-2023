/**
 * The default config includes everything for a Frontend project,
 * React, Typescript and Jest.
 */
module.exports = {
    extends: [
        './src/base',
        './src/typescript',
        './src/react',
        './src/jest',
        './src/unicorn',
        './src/jsdoc',
        './src/import',
        './src/etc'
    ]
};
