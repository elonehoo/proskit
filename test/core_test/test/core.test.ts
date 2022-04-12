import { assert, expect, test } from 'vitest'

import { convert } from '../../../packages/core/src'

test.skip('test convert to string',()=>{

  console.log('-----------convert to string 1-----------')

  console.log('convert to string 1', typeof convert.toString(1), convert.toString(1))

  console.log('-----------convert to string 2-----------')
  console.log('convert to string 2',typeof convert.toString(2), convert.toString(2))

  console.log('-----------convert to string 2.8-----------')
  console.log('convert to string 2',typeof convert.toString(2.8), convert.toString(2.8))
})

test('test convert to boolean',()=>{
  console.log(convert.toBoolean(0))
  console.log(convert.toBoolean(1))
})
