module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript',
        'plugin:prettier/recommended',
        "plugin:tailwindcss/recommended",
        "@feature-sliced"
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "vue/block-order": ["error", {
            "order": [ "script","template", "style" ]
        }],
        "vue/multi-word-component-names": 'off'
    },
};
