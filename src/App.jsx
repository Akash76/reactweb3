import { useState, useEffect } from 'react'
import { AppContext } from './utils/context';
import AppRoutes from './AppRoutes';
import { setAxiosHeaders } from './utils/setAxiosHeaders';
import './App.css';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  
  useEffect(() => {
    load();
  }, [])

  const load = async () => {
    console.log(userAuthenticated)
    setIsAuthenticating(false)
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
