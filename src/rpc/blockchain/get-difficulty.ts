// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type GetDifficultyParams = {
  bitcoind: Bitcoind
}

/**
 * getdifficulty
 *
 * Returns the proof-of-work difficulty as a multiple of the minimum difficulty.
 *
 */
export function getDifficulty(params: GetDifficultyParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'getdifficulty', params: methodParams }, bitcoind)
}
