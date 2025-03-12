// Auto synced from github actions. Don't change this file

import { Bitcoind } from '../../types.js'
import request from '../../rpc-request.js'

type SetHdSeedParams = {
  bitcoind: Bitcoind
  /* Whether to flush old unused addresses, including change addresses, from the keypool and regenerate it.
       If true, the next address from getnewaddress and change address from getrawchangeaddress will be from this new seed.
       If false, addresses (including change addresses if the wallet already had HD Chain Split enabled) from the existing
       keypool will be used until it has been depleted. */
  newkeypool?: boolean
  /* The WIF private key to use as the new HD seed.
       The seed value can be retrieved using the dumpwallet command. It is the private key marked hdseed=1 */
  seed?: string
}

/**
 * sethdseed ( newkeypool "seed" )
 *
 * Set or generate a new HD wallet seed. Non-HD wallets will not be upgraded to being a HD wallet. Wallets that are already
 * HD will have a new HD seed set so that new keys added to the keypool will be derived from this new seed.
 * Note that you will need to MAKE A NEW BACKUP of your wallet after setting the HD wallet seed.
 * Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.
 * Note: This command is only compatible with legacy wallets.
 *
 */
export function setHdSeed(params: SetHdSeedParams) {
  const { bitcoind, ...methodParams } = params
  return request({ method: 'sethdseed', params: methodParams }, bitcoind)
}
