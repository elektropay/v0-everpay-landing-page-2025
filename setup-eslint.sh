#!/bin/bash

# Install ESLint and related packages
npm install --save-dev eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-prettier prettier eslint-import-resolver-typescript eslint-plugin-import

# Create initial configuration files if they don't exist
touch .eslintrc.js .prettierrc .eslintignore

echo "ESLint setup complete! You can now run 'npm run lint' to check your code."
