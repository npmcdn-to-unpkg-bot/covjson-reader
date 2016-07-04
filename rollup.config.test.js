import config from './rollup.config.template.js'

export default config({entry: 'test/tests.js', dest: 'test/bundle.js', external: []})