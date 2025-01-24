module.exports = {
  tagFormat: '${version}',
  branches: ['main', 'DS3'],
  repositoryUrl: 'git@github.com:OAPI-Commercial-IT/emulsify-drupal.git',
  private: true,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/github',
  ],
};
