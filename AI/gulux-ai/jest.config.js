process.env.GULUX_EXTENSIONS = '.js,.ts,.node,.json';
module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testTimeout: 100 * 1000,
  testRegex: '/.*test/.+.(test|spec).(ts|js)$',
};
