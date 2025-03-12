// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type VerifyTxOutProofParams = {
  bitcoind: Bitcoind
  /* The hex-encoded proof generated by gettxoutproof */
  proof: string
}

/**
 * verifytxoutproof "proof"
 *
 * Verifies that a proof points to a transaction in a block, returning the transaction it commits to
 * and throwing an RPC error if the block is not in our best chain
 *
 */
export function verifyTxOutProof(params: VerifyTxOutProofParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'verifytxoutproof', params: methodParams }, bitcoind)
}
