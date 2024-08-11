# typescript-eslint

```markdown
# Project Name

## Description

Brief description of your project.

## Installation

To set up this project locally, run the following commands:

```bash
npm install typescript
```

```bash
npm install typescript-eslint
```

```bash
npm install --save-dev typescript
```

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## ESLint Configuration

Here is a sample ESLint configuration for TypeScript:

```json
{
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname
  },
  "rules": {
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error"
  }
}
```

For more information on configuring ESLint with TypeScript, visit the [TypeScript ESLint documentation](https://typescript-eslint.io/).

## Scripts

In your `package.json` file, include these scripts to lint and test your code:

```json
"scripts": {
  "pretest": "tsc --noEmit && eslint tests/**/*.js",
  "test": "playwright test"
}
```

Run these before pushing code to ensure quality standards.
