var parse = require('./')

require('tape')(function(t) {
  t.deepEqual(parse('{}'), {}, 'empty object')
  t.deepEqual(parse('[]'), [], 'empty array')
  t.end() })
