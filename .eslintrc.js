module.exports = {
  "extends": [
    "plugin:vue/vue3-recommended",
    'plugin:@typescript-eslint/recommended'
  ],
  
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  parser: 'vue-eslint-parser',
  // parserOptions: {
  "parserOptions": {
    // "parser": "babel-eslint",
    parser: '@typescript-eslint/parser',
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module",
    "parserOptions": {
      "allowImportExportEverywhere": true
    }
  },
  "globals": {
    "window": true,
  },
  "rules": {
    'no-var': "error",
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [
        "error",
        "interface"
    ],
		// "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": 2, // 使用 ts 未使用变量的规则 比如枚举类型在es中会报错
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-extend-native": 0,
    "no-new": 0,
    "no-useless-escape": 0,
    "no-useless-constructor": 0,
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "indent": ["error", 4, {
      "SwitchCase": 1
    }],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
    "semi": ["error", "always"],
    "comma-dangle": 0,
    "no-console": 0,
    "no-debugger": 0,
    "id-length": 0,
    "eol-last": 0,
    "object-curly-spacing": ["error", "never"],
    "arrow-spacing": "error",
    "no-multiple-empty-lines": "error",
    "spaced-comment": "error",
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-unreachable": "error",
    "keyword-spacing": "error",
    "space-before-blocks": "error",
    "semi-spacing": "error",
    "comma-spacing": "error",
    "key-spacing": "error",
    "no-undef": "error",
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "vue/script-indent": ["warn", 4, {
      "baseIndent": 1,
      "switchCase": 1
    }],
    "vue/html-indent": ["error", 4],
    "vue/html-quotes": ["error", "single", { "avoidEscape": true }],
  },
  "overrides": [
    {
       "files": ["*.vue"],
       "rules": {
         "indent": "off"
       }
     }
   ]
}
