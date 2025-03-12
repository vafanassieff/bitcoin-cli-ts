// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type ClearBannedParams = {
  bitcoind: Bitcoind
}

/**
 * clearbanned
 *
 * Clear all banned IPs.
 *
 */
export function clearBanned(params: ClearBannedParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'clearbanned', params: methodParams }, bitcoind)
}
