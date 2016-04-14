# dscript-react
[![NPM version](https://badge.fury.io/js/dscript-react.svg)](https://badge.fury.io/js/dscript-react)
[![Build Status](https://travis-ci.org/dustinspecker/dscript-react.svg)](https://travis-ci.org/dustinspecker/dscript-react)
[![Coverage Status](https://img.shields.io/coveralls/dustinspecker/dscript-react.svg)](https://coveralls.io/r/dustinspecker/dscript-react?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/dscript-react/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/dscript-react)
[![Dependencies](https://david-dm.org/dustinspecker/dscript-react.svg)](https://david-dm.org/dustinspecker/dscript-react/#info=dependencies&view=table)
[![DevDependencies](https://david-dm.org/dustinspecker/dscript-react/dev-status.svg)](https://david-dm.org/dustinspecker/dscript-react/#info=devDependencies&view=table)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> [dscript](https://github.com/dustinspecker/dscript) with [React](https://facebook.github.io/react/) setup done for you

**Check out [dscript](https://github.com/dustinspecker/dscript) for documentation on more advanced usage.**

## Install
For usage with React `v15.0`:
```
npm install --save dscript-react
```

**Note: React `v0.14` users should install via `npm install --save dscript-react@1.0.0`**


## Usage
```javascript
import creator, {div, li, ul} from 'dscript-react'

import customComponent from './custom-component'

const customComponentCreator = creator(customComponent)

const handleClick = () => alert('hi')

export default props =>
  div('.list-container', {onClick: handleClick}, [
    customComponentCreator({total: props.total}),
    ul(
      props.items.map(item =>
        li([item.name])
      )
    )
  ])
```

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
