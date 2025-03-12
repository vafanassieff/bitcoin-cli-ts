// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type MockSchedulerParams = {
  bitcoind: Bitcoind
  /* Number of seconds to forward the scheduler into the future. */
  delta_time: number
}

/**
 * mockscheduler delta_time
 *
 * Bump the scheduler into the future (-regtest only)
 *
 */
export function mockScheduler(params: MockSchedulerParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'mockscheduler', params: methodParams }, bitcoind)
}
