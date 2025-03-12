// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetBalancesParams = {
  bitcoind: Bitcoind
}

/**
 * getbalances
 *
 * Returns an object with all balances in BTC.
 *
 */
export function getBalances(params: GetBalancesParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getbalances', params: methodParams }, bitcoind)
}
