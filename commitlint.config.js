module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
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
