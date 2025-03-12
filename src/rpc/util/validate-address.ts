// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type ValidateAddressParams = {
  bitcoind: Bitcoind
  /* The bitcoin address to validate */
  address: string
}

/**
 * validateaddress "address"
 *
 * Return information about the given bitcoin address.
 *
 */
export function validateAddress(params: ValidateAddressParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'validateaddress', params: methodParams }, bitcoind)
}
