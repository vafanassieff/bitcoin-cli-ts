// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetRpcInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getrpcinfo
 *
 * Returns details of the RPC server.
 *
 */
export function getRpcInfo(params: GetRpcInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getrpcinfo', params: methodParams }, bitcoind)
}
