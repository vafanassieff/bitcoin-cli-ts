// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetMempoolInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getmempoolinfo
 *
 * Returns details on the active state of the TX memory pool.
 *
 */
export function getMempoolInfo(params: GetMempoolInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getmempoolinfo', params: methodParams }, bitcoind)
}
