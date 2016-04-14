# dscript-react
[![NPM version](https://badge.fury.io/js/dscript-react.svg)](https://badge.fury.io/js/dscript-react)
[![Build Status](https://travis-ci.org/dustinspecker/dscript-react.svg)](https://travis-ci.org/dustinspecker/dscript-react)
[![Coverage Status](https://img.shields.io/coveralls/dustinspecker/dscript-react.svg)](https://coveralls.io/r/dustinspecker/dscript-react?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/dscript-react/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/dscript-react)
[![Dependencies](https://david-dm.org/dustinspecker/dscript-react.svg)](https://david-dm.org/dustinspecker/dscript-react/#info=dependencies&view=table)
[![DevDependencies](https://david-dm.org/dustinspecker/dscript-react/dev-status.svg)](https://david-dm.org/dustinspecker/dscript-react/#info=devDependencies&view=table)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> [dscript](https://github.com/dustinspecker/dscript) with [React](https://facebook.github.io/react/) setup done for you

**Check out [dscript](https://github.com/dustinspecker/dscript) for documentation on more advanced usage.**

## Install
```
npm install --save dscript-react
```

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
