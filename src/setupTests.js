// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

//NOTE: This is to fix, jest types issue
// https://github.com/nrwl/nx/issues/816#issuecomment-439470349
import 'jest'

import React from 'react'

import common from '../public/i18n/translations/en/common.json'
import todos from '../public/i18n/translations/en/todos.json'

import i18n from './Common/i18n'

i18n.options.react.useSuspense = false

i18n.t = (translationString, countObject = { count: 1 }) => {
  const colonSplittedStrings = translationString.split(':')
  let dotSplittedStrings = []
  let resolvedStrings
  let result = ''
  if (colonSplittedStrings.length === 1) {
    dotSplittedStrings = colonSplittedStrings[0].split('.')
    resolvedStrings = common
  } else if (colonSplittedStrings.length === 2) {
    dotSplittedStrings = colonSplittedStrings[1].split('.')
    switch (colonSplittedStrings[0]) {
      case 'common':
        resolvedStrings = common
        break
      case 'todos':
        resolvedStrings = kossip
        break
    }
  }
  for (let index = 0; index < dotSplittedStrings.length; index++) {
    result = dotSplittedStrings[index]
    if (Math.abs(countObject.count) !== 1) {
      if (resolvedStrings[`${result}_plural`]) {
        result = `${result}_plural`
      }
    }
    resolvedStrings = resolvedStrings[result]
  }
  return resolvedStrings
}
