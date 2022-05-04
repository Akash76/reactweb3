import React from "react";
import { useEthers, useEtherBalance, useContractFunction, useContractCall } from "@usedapp/core";
import { utils } from "ethers";
import { formatEther } from "@ethersproject/units"
import { Contract } from "@ethersproject/contracts"
import GreeterContractABI from "../../contract/src/artifacts/contracts/Greeter.sol/Greeter.json"
import "./LandingPage.css";

function LandingPage() {
  const greeterInterface = new utils.Interface(GreeterContractABI.abi)
  const contractAddress = "0x71C95911E9a5D330f4D621842EC243EE1343292e"
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  const contract = new Contract(contractAddress, greeterInterface)
  const { state, send } = useContractFunction(contract, 'greet', { transactionName: 'greet' })

  const data = useContractCall({
    abi: greeterInterface,
    address: contractAddress,
    method: "greet",
    args: [],
  })

  React.useEffect(() => {
    console.log(data)
  }, [])

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  const disconnect = () => {
    deactivate()
  }

  const invokeContract = async () => {
    const data = await send()
    console.log(data)
  }

  return account ? (
    <div className="landingpage">
      <h1>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH</h1>
      <button onClick={disconnect}>Disconnect</button>  <br />
      <h1> ETH</h1>   
    </div>
  ) : (
    <button onClick={handleConnectWallet}>Connect</button>
  );
}

export default LandingPage;
