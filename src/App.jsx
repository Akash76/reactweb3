import { useState, useEffect } from 'react'
import { AppContext } from './utils/context';
import { checkWalletConnection } from './utils/contract';
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
    try {
      setIsAuthenticating(false)
      if(await window.ethereum._metamask.isUnlocked() && localStorage.getItem("disconnected") === "FALSE") {
        let web3Accounts = await checkWalletConnection()
        setWeb3Account(web3Accounts)
      } 
    } catch (error) {
      console.log(error)
    }
  }

  const disconnect = async () => {
    setWeb3Account(null)
    localStorage.setItem("disconnected", "TRUE")
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
