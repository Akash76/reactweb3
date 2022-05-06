import React from "react";
import { useEthers, useEtherBalance, useContractFunction, useContractCall } from "@usedapp/core";
import { utils } from "ethers";
import { formatEther } from "@ethersproject/units"
import { Contract } from "@ethersproject/contracts"
import GreeterContractABI from "../../contract/src/artifacts/contracts/Greeter.sol/Greeter.json"
import "./LandingPage.css";

function LandingPage() {
  React.useEffect(() => {
    console.log(data)
  }, [])

  return account ? (
    <div className="landingpage">
      
    </div>
  ) : (
    <button>Connect</button>
  );
}

export default LandingPage;
