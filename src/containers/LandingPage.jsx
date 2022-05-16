import React from "react";
import { useAppContext } from "../utils/context"
import "./LandingPage.css";

function LandingPage() {
  const { connect, disconnect, data } = useAppContext();

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
