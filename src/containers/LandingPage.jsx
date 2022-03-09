import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import "./LandingPage.css";

function LandingPage() {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  const disconnect = () => {
    deactivate()
  }

  return account ? (
    <div className="landingpage">
      <h1>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH</h1>
      <button onClick={disconnect}>Disconnect</button>    
    </div>
  ) : (
    <button onClick={handleConnectWallet}>Connect</button>
  );
}

export default LandingPage;
