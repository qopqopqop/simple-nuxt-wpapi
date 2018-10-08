# simple-nuxt-wpapi

[![npm (scoped with tag)](https://img.shields.io/npm/v/simple-nuxt-wpapi/latest.svg?style=flat-square)](https://npmjs.com/package/simple-nuxt-wpapi)
[![npm](https://img.shields.io/npm/dt/simple-nuxt-wpapi.svg?style=flat-square)](https://npmjs.com/package/simple-nuxt-wpapi)
[![CircleCI](https://circleci.com/gh/qopqopqop/simple-nuxt-wpapi.svg?style=svg)](https://circleci.com/gh/qopqopqop/simple-nuxt-wpapi)
[![codecov](https://codecov.io/gh/qopqopqop/simple-nuxt-wpapi/branch/master/graph/badge.svg)](https://codecov.io/gh/qopqopqop/simple-nuxt-wpapi)
[![Dependencies](https://david-dm.org/qopqopqop/simple-nuxt-wpapi.svg)](https://david-dm.org/qopqopqop/simple-nuxt-wpapi.svg)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

>

[📖 **Release Notes**](./CHANGELOG.md)

## Features

This module is for internal feature testing, it will break often. DO NO USE

## Setup

- Add `simple-nuxt-wpapi` dependency using yarn or npm to your project
- Add `simple-nuxt-wpapi` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Usage with options
    [
      "simple-nuxt-wpapi",
      {
        {
        nodeCache: {
          enabled: true,
          options: {
            // node-cache options
            }
        },
        wpApi: {
          enabled: true,
          debug: false,
          options: {
            // node wpapi options
            endpoint: 'http://demo.wp-api.org/wp-json'
          }
        }
      }
      }
    ]
  ];
}
```

## Usage

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Enrique Garrido <kik@ferpect.io>
