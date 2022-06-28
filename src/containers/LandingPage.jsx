import React from "react";
import { connectWallet, checkWalletConnection, query, invoke } from "../utils/contract";
import { useAppContext } from "../utils/context"
import "./LandingPage.css";

function LandingPage() {
  const { web3Account, setWeb3Account, disconnect } = useAppContext();

  const connect = async () => {
    let web3Accounts = await checkWalletConnection()
    if(!web3Accounts) {
      web3Accounts = await connectWallet()
    }
    setWeb3Account(web3Accounts)
    localStorage.setItem("disconnected", "FALSE")
  }

  return web3Account ? (
    <div className="landingpage">
      <h3>{web3Account}</h3>
      <button onClick={() => query()}>Query</button>
      <button onClick={() => invoke()}>Invoke</button>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  ) : (
    <button onClick={() => connect()}>Connect</button>
  );
}

export default LandingPage;
