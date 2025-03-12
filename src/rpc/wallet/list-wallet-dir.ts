// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type ListWalletDirParams = {
  bitcoind: Bitcoind
}

/**
 * listwalletdir
 *
 * Returns a list of wallets in the wallet directory.
 *
 */
export function listWalletDir(params: ListWalletDirParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listwalletdir', params: methodParams }, bitcoind)
}
