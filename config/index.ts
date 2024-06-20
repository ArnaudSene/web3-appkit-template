import { http } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains"
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { allfeat } from "./network"


export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ""
if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
    name: 'web3-appKit-template',
    description: 'AppKit Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [sepolia, mainnet, allfeat] as const

export const config = defaultWagmiConfig({
    ssr: true,
    metadata,
    chains,
    projectId,
    transports: {
        // RPC URL for each chain
        [sepolia.id]: http(
          `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
        ),
        [mainnet.id]: http(
          `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
        ),
        [allfeat.id]: http(allfeat.rpcUrls.default.http[0])
      },
})


