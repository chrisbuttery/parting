#!/usr/bin/env node
'use strict'
var meow = require('meow')
var parting = require('./')

var cli = meow({
  help: [
    'Examples',
    '  $ parting',
    '  Hello',
    '',
    '  $ parting --all',
    '  Hello',
    '  Aye-oop',
    '  ...',
    '',
    'Options',
    '  --all   Get all partings instead of a random parting'
  ].join('\n')
})

console.log(cli.flags.all ? parting.all.join('\n') : parting.random())
