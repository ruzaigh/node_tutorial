// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const name = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')

// sayHi('susan')
// sayHi(name.john)
// sayHi(name.peter)