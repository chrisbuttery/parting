'use strict'
var uniqueRandomArray = require('unique-random-array')
var partings = require('./partings.json')

exports.all = partings
exports.random = uniqueRandomArray(partings)
