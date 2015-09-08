# parting

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]

Common ways to say good-bye.

## Install

```sh
$ npm i --save parting
```

## Usage

```js
import parting from 'parting'

parting.random()
//> Tootles

parting.all
//> ["Adieu", "Adios", "Arrivederci", ... ]
```

## CLI

```sh
$ npm -i -g parting
```

```sh
$ parting --help

  Examples
    $ parting
    Howdy

    $ parting --all
    G'day
    Hello
    ...

  Options
    --all   Get all partings instead of a random parting
```

Inspired by [sindresorhus](https://github.com/sindresorhus/dog-names)

## License

MIT © [Chris Buttery](http://chrisbuttery.com)

[npm-image]: https://img.shields.io/npm/v/parting.svg?style=flat-square
[npm-url]: https://npmjs.org/package/parting
[travis-image]: https://img.shields.io/travis/chrisbuttery/parting.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisbuttery/parting
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[coveralls-image]: https://img.shields.io/coveralls/chrisbuttery/parting.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chrisbuttery/parting?branch=master
