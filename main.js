console.log("krkrkssss")

import { createWeb3Modal, defaultConfig } from './node_modules/@web3modal/ethers'
console.log("sssskrkrk")

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'fd94447fcbf33e960a54162ed6aaeb89'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

console.log("jfjfjhelllloooooo")
const modal = createWeb3Modal({
  featuredWalletIds: ["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18"
  ],
  includeWalletIds: ["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
  "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18"
  ],
  customWallets: [
    {
      id: 'myCustomWallet',
      name: 'My Custom Wallet'
    }],
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})


let connectAndSendbtn = document.querySelector(".connectAndSend")
connectAndSendbtn.addEventListener("click",connectAndSend)

async function connectAndSend(e) {
    let v = null
    console.log(e,"WEew")
    let target = e.currentTarget
    try {
        //  target.disabled =true
        // throw("")
        modal.open()
    } catch (error) {

       

        console.error('Error connecting to wallet:', error.message);
    }finally{
        // target.disabled =false

    }
}

