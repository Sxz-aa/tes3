
module.exports = {
  extends: ['next/core-web-vitals'],
   "rules": {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "ignoreRestSiblings": true  // 新增此选项
      }
    ],
    "react-hooks/exhaustive-deps": [
      "warn",
      { "additionalHooks": "(useCustomHook)" }
    ]
  }
}
