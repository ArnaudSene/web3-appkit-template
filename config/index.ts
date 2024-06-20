import { sepolia, mainnet } from "wagmi/chains";
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'


export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ""
if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
    name: 'web3-appKit-template',
    description: 'AppKit Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [sepolia, mainnet] as const

export const config = defaultWagmiConfig({
    ssr: true,
    metadata,
    chains,
    projectId,
})

