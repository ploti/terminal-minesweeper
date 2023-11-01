module.exports = {
  '*.{js,jsx,ts,tsx}': [
    // Runs Prettier on changes.
    `prettier --write`,
    // Runs ESLint on changes.
    `eslint --fix`,
  ],
  '*.{md,html,css,json}': 'prettier --write',
  // Runs tsc on changes to TypeScript files.
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
};
