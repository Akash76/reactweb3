import { useState, useEffect } from 'react'
import { AppContext } from './utils/context';
import { query, connectWallet } from './utils/contract';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  
  useEffect(() => {
    load();
  }, [])

  const load = async () => {
    setIsAuthenticating(false)
    await connectWallet()
    await query()
  }

  const logout = async () => {
  }

  return (
    !isAuthenticating &&
    <div className="App">
      <div className="routes">
        <AppContext.Provider value={{
          userAuthenticated,
          setUserAuthenticated,
          isAuthenticating,
          logout
        }}>
          <AppRoutes />
        </AppContext.Provider>
      </div>
    </div>
  )
}

export default App
