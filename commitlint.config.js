module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  ignores: [(message) => message.toLowerCase().includes('bumps')],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'test',
      ],
    ],
  },
};
