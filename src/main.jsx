import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App'
import { ChainId, DAppProvider, Localhost } from '@usedapp/core'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <DAppProvider config={{
        // readOnlyChainId: Localhost.chainId,
        readOnlyUrls: {
          31337: `http://localhost:8545`
        },
        supportedChains: [
          ChainId.Mainnet,
          ChainId.Goerli,
          ChainId.Kovan,
          ChainId.Rinkeby,
          ChainId.Ropsten,
          ChainId.xDai,
          ChainId.BSC,
          ChainId.Localhost,
          ChainId.Hardhat,
        ],
      }}> */}
        <App />
      {/* </DAppProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
