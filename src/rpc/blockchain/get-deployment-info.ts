// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetDeploymentInfoParams = {
  bitcoind: Bitcoind
  /* The block hash at which to query deployment state */
  blockhash?: string
}

/**
 * getdeploymentinfo ( "blockhash" )
 *
 * Returns an object containing various state info regarding deployments of consensus changes.
 *
 */
export function getDeploymentInfo(params: GetDeploymentInfoParams) {
  const { bitcoind, ...methodParams } = params
  return request(
    { method: 'getdeploymentinfo', params: methodParams },
    bitcoind
  )
}
