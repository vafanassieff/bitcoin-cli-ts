// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type UpTimeParams = {
  bitcoind: Bitcoind
}

/**
 * uptime
 *
 * Returns the total uptime of the server.
 *
 */
export function upTime(params: UpTimeParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'uptime', params: methodParams }, bitcoind)
}
