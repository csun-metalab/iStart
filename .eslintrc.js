module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'eslint-config-standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    'jest': true,
    'expect': true,
    'config': true,
    'describe': true,
    'it': true,
    'waitsFor': true,
    'require': true,
    'pit': true,
    'xit': true,
    'xdescribe': true,
    'mockFn': true,
    'afterEach': true,
    'beforeEach': true,
    'runs': true
  }
}
