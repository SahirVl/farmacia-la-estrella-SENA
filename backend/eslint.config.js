const globals = require("globals");
const eslintPluginPrettier = require("eslint-plugin-prettier");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.es2021,
                ...globals.node,
                ...globals.jest,
            },
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            "no-console": "off",
            "prettier/prettier": "error",
        },
    },
];
