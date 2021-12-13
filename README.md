# `ethereum-boilerplate-NFT-Marketplace`


![Preview](preview.gif)

# ⭐️ `Star us`
If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes us very happy!

# 🚀 Quick Start

📄 Clone or fork `ethereum-nft-marketplace-boilerplate`:
```sh
git clone 
```
💿 Install all dependencies:
```sh
cd ethereum-nft-marketplace
yarn install 
```
✏ Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server)) 
Example:
```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

🔎 Locate the MoralisDappProvider in `src/components/Admin/index.js` and paste the deployed marketplace smart contract address and ABI
```js
export const ProjectAddress = "" // Project Contract
export const ProjectChainId = "" // Project Chain Id
```

🔃 Sync the `ModuleUpdated` event from project contract with your Moralis Server, calling tableName `ModuleSync`


🚴‍♂️ Run your App:
```sh
yarn start
```


