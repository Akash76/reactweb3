import { useState, useEffect } from 'react'
import { AppContext } from './utils/context';
import { useAccount, useDisconnect, useConnect } from 'wagmi'
import AppRoutes from './AppRoutes';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import './App.css';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const metamaskConnector = new MetaMaskConnector()
  const { disconnect } = useDisconnect()
  const { connect } = useConnect({
    connector: metamaskConnector,
  })
  const { data } = useAccount()

  useEffect(() => {
    load();
  }, [])

  const load = async () => {
    try {
      setIsAuthenticating(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    !isAuthenticating &&
    <div className="App">
      <div className="routes">
        <AppContext.Provider value={{   
          connect,       
          disconnect,
          data,
          userAuthenticated,
          setUserAuthenticated
        }}>
          <AppRoutes />
        </AppContext.Provider>
      </div>
    </div>
  )
}

export default App
