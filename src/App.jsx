import { useState, useEffect } from 'react'
import { AppContext } from './utils/context';
import { useAccount, useDisconnect } from 'wagmi'
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const { disconnect } = useDisconnect()
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
          disconnect,
          data
        }}>
          <AppRoutes />
        </AppContext.Provider>
      </div>
    </div>
  )
}

export default App
