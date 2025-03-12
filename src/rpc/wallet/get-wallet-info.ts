// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetWalletInfoParams = {
  bitcoind: Bitcoind
}

/**
 * getwalletinfo
 *
 * Returns an object containing various wallet state info.
 *
 */
export function getWalletInfo(params: GetWalletInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getwalletinfo', params: methodParams }, bitcoind)
}
