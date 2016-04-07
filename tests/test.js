'use strict'
import test from 'ava'

import {div} from '../lib/'

test('verify it works with React\'s createElement', t => {
  const reactDiv = div('.yo#hi', {title: 'hello'}, ['world'])

  t.is(reactDiv.type, 'div')
  t.is(reactDiv.props.title, 'hello')
  t.is(reactDiv.props.id, 'hi')
  t.is(reactDiv.props.class, 'yo')
  t.deepEqual(reactDiv.props.children[0], 'world')
})
