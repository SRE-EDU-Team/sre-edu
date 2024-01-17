module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "simple-import-sort"
    ],
    "rules": {
        "indent": ["warn", 4],
        "@typescript-eslint/indent": ["warn", 4],
        "simple-import-sort/imports": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-literals": ["warn", {"noStrings": true, "noAttributeStrings": true}],
        "jsx-quotes": ["warn", "prefer-single"]
    }
}
