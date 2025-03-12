// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetMiningInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getmininginfo
 *
 * Returns a json object containing mining-related information.
 *
 */
export function getMiningInfo(params: GetMiningInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getmininginfo', params: methodParams }, bitcoind)
}
