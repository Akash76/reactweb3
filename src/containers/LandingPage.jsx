import React from "react";
import { connectWallet, checkWalletConnection, query } from "../utils/contract";
import { useAppContext } from "../utils/context"
import "./LandingPage.css";

function LandingPage() {
  const { web3Account, setWeb3Account, disconnect } = useAppContext();

  const connect = async () => {
      const web3Accounts = await connectWallet()
      setWeb3Account(web3Accounts[0])
  }

  return web3Account ? (
    <div className="landingpage">
      <h3>{web3Account}</h3>
      <button onClick={() => query()}>Query</button>
    </div>
  ) : (
    <button onClick={() => connect()}>Connect</button>
  );
}

export default LandingPage;
