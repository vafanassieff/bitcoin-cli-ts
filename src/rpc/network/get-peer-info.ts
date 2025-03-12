// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetPeerInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getpeerinfo
 *
 * Returns data about each connected network peer as a json array of objects.
 *
 */
export function getPeerInfo(params: GetPeerInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getpeerinfo', params: methodParams }, bitcoind)
}
