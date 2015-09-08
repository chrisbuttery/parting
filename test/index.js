'use strict'
var test = require('tape')
var parting = require('../')

test('should return one parting', function (t) {
  t.ok(parting.random(), 'A parting was returned')
	t.end()
})

test('should return all partings', function (t) {
  t.ok(parting.all.length > 0, "An array of partings was returned")
	t.end()
})
