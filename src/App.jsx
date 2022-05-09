import { useState, useEffect } from 'react'
import { AppContext } from './utils/context';
import { query, checkWalletConnection } from './utils/contract';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [web3Account, setWeb3Account] = useState(null)

  useEffect(() => {
    load();
  }, [])

  const load = async () => {
    console.log("MM", await window.ethereum._metamask.isUnlocked())
    setIsAuthenticating(false)
    // await connectWallet()
    // await query()
    const account = await checkWalletConnection()
    setWeb3Account(account)
  }

  const disconnect = async () => {
    setWeb3Account(null)
  }

  return (
    !isAuthenticating &&
    <div className="App">
      <div className="routes">
        <AppContext.Provider value={{
          userAuthenticated,
          setUserAuthenticated,
          isAuthenticating,
          disconnect,
          web3Account,
          setWeb3Account
        }}>
          <AppRoutes />
        </AppContext.Provider>
      </div>
    </div>
  )
}

export default App
