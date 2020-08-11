module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'json', 'vue'],
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  // 覆盖率报告的目录
  collectCoverageFrom: [
    // 测试报告想要覆盖那些文件，目录，前面加！是避开这些文件
    'src/models/**/*.(js|vue)',
    'src/components/**/*.(js|vue)',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
};
