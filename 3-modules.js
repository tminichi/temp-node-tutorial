// CommonJS, ever file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names.js')
const {sayHi} = require('./5-utils.js')
const data = require('./6-alternative-flavors.js')

const x = require ('./7-mind-grenade.js')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
