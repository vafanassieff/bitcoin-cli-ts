// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetAddressesByLabelParams = {
  bitcoind: Bitcoind
  /* The label. */
  label: string
}

/**
 * getaddressesbylabel "label"
 *
 * Returns the list of addresses assigned the specified label.
 *
 */
export function getAddressesByLabel(params: GetAddressesByLabelParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getaddressesbylabel', params: methodParams },
    bitcoind
  )
}
