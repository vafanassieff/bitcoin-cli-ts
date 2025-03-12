// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetchainstatesParams = {
  bitcoind: Bitcoind
}

/**
 * getchainstates
 *
 * Return information about chainstates.
 *
 */
export function getchainstates(params: GetchainstatesParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getchainstates', params: methodParams }, bitcoind)
}
