
import { assert, expect, test } from 'vitest'

import convert from '../../../packages/toolbox/src/core/convert/convert'
import strUtil from '../../../packages/toolbox/src/util/strUtil'

/**
 * test convert to string
 */
test.skip('convert to string',()=>{
  const value = 13
  console.log( 'convert to string---> ' + convert.toStr(value))
})

/**
 * test isBlankIfStr
 */
test.skip('strUtil to isBlankIfStr',()=>{
  const value = "abc"
  console.log(strUtil.isBlankIfStr(value))
})
