import React from "react";
import { useAppContext } from "../utils/context"
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useConnect } from 'wagmi'
import "./LandingPage.css";

function LandingPage() {
  const { disconnect, data } = useAppContext();

  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  })

  return data ? (
    <div className="landingpage">
      <h3>{data.address}</h3>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  ) : (
    <button onClick={() => connect()}>Connect</button>
  );
}

export default LandingPage;
