// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetDescriptorInfoParams = {
  bitcoind: Bitcoind
  /* The descriptor. */
  descriptor: string
}

/**
 * getdescriptorinfo "descriptor"
 *
 * Analyses a descriptor.
 *
 */
export function getDescriptorInfo(params: GetDescriptorInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getdescriptorinfo', params: methodParams },
    bitcoind
  )
}
