
import { assert, expect, test } from 'vitest'

import { strUtil } from '../../../packages/util/src/index'

test.skip('text start',()=>{
  console.log('text start')
})

test('test in strUtil', () => {
  console.log('strUtil is blank -->',strUtil.isBlank(''))
  console.log('strUtil is blank -->',strUtil.isBlank('abc'))
  console.log('strUtil is blank -->',strUtil.isNotEmpty(' abc '))
  console.log('strUtil is blank -->',strUtil.isNotEmpty(''))
})
