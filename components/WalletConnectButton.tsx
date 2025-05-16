'use client'

import { cn } from '@/lib/utils'
import {
  type LEATHER,
  MAGIC_EDEN,
  type OKX,
  type OP_NET,
  type ORANGE,
  type OYL,
  type PHANTOM,
  type ProviderType,
  type UNISAT,
  useLaserEyes,
  WalletIcon,
  type WIZZ,
  type XVERSE
} from '@omnisat/lasereyes'
import Link from 'next/link'
import { ImNewTab } from 'react-icons/im'
import { toast } from 'sonner'

const baseButtonStyles = "relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
const downloadButtonStyles = "bg-black/40 border border-orange-500/20 text-orange-500/90 hover:bg-orange-500/10 hover:border-orange-500/40"
const connectedButtonStyles = "bg-orange-500/10 border border-orange-500/30 text-orange-500 hover:bg-orange-500/20"
const connectButtonStyles = "bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:shadow-[0_0_20px_rgba(255,140,0,0.2)] active:scale-[0.98]"

const WalletConnectButton = ({
  wallet,
}: {
  wallet: {
    name: ProviderType
    url: string
  }
}) => {
  const walletName = wallet.name
  const {
    connect,
    disconnect,
    provider,
    hasUnisat,
    hasXverse,
    hasOyl,
    hasMagicEden,
    hasOkx,
    hasLeather,
    hasPhantom,
    hasWizz,
    hasSparrow,
    hasOrange,
    hasOpNet,
  } = useLaserEyes()

  const hasWallet = {
    unisat: hasUnisat,
    xverse: hasXverse,
    oyl: hasOyl,
    [MAGIC_EDEN]: hasMagicEden,
    okx: hasOkx,
    sparrow: hasSparrow,
    op_net: hasOpNet,
    leather: hasLeather,
    phantom: hasPhantom,
    wizz: hasWizz,
    orange: hasOrange,
  }

  const isConnected = provider === walletName
  const isMissingWallet = !hasWallet[walletName]

  const connectWallet = async (
    walletName:
      | typeof UNISAT
      | typeof XVERSE
      | typeof OYL
      | typeof MAGIC_EDEN
      | typeof OKX
      | typeof OP_NET
      | typeof LEATHER
      | typeof PHANTOM
      | typeof WIZZ
      | typeof ORANGE
  ) => {
    try {
      await connect(walletName)
    } catch (error) {
      console.log('error!', error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  type WalletProvders =
    | typeof UNISAT
    | typeof XVERSE
    | typeof OYL
    | typeof MAGIC_EDEN
    | typeof OKX
    | typeof OP_NET
    | typeof LEATHER
    | typeof PHANTOM
    | typeof WIZZ
    | typeof ORANGE

  if (isMissingWallet) {
    return (
      <Link href={wallet.url} target="_blank" className="group">
        <button
          className={cn(baseButtonStyles, downloadButtonStyles, "group-hover:opacity-100 opacity-70")}
        >
          <WalletIcon walletName={wallet.name} size={20} />
          <span>Download {wallet.name}</span>
          <ImNewTab className="w-3 h-3 opacity-70" />
        </button>
      </Link>
    )
  }

  const disconnectWallet = () => {
    disconnect()
  }

  if (isConnected) {
    return (
      <button
        onClick={disconnectWallet}
        className={cn(baseButtonStyles, connectedButtonStyles)}
      >
        <WalletIcon walletName={wallet.name} size={20} />
        <span>Disconnect {wallet.name}</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => connectWallet(walletName as WalletProvders)}
      className={cn(baseButtonStyles, connectButtonStyles)}
    >
      <WalletIcon walletName={wallet.name} size={20} />
      <span>Connect to {wallet.name}</span>
    </button>
  )
}

export default WalletConnectButton
