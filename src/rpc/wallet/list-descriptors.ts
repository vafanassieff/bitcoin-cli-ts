// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type ListDescriptorsParams = {
  bitcoind: Bitcoind
  /* Show private descriptors. */
  private?: boolean
}

/**
 * listdescriptors ( private )
 *
 * List descriptors imported into a descriptor-enabled wallet.
 *
 */
export function listDescriptors(params: ListDescriptorsParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'listdescriptors', params: methodParams }, bitcoind)
}
