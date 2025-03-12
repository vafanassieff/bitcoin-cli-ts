// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type SetWalletFlagParams = {
  bitcoind: Bitcoind
  /* The name of the flag to change. Current available flags: avoid_reuse */
  flag: string
  /* The new state. */
  value?: boolean
}

/**
 * setwalletflag "flag" ( value )
 *
 * Change the state of the given wallet flag for a wallet.
 *
 */
export function setWalletFlag(params: SetWalletFlagParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'setwalletflag', params: methodParams }, bitcoind)
}
