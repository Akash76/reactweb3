import { ethers } from "ethers";
import { ABI, contractAddress } from "../utils/constants";
const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const greeterContract = new ethers.Contract(contractAddress, ABI, signer);

  return greeterContract;
};

export const checkWalletConnection = async () => {
  try {
    if (!ethereum) return alert("Please install MetaMask.");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      const currentAccount = accounts[0];

      return currentAccount
    } else {
      console.log("No accounts found");
    }
  } catch (error) {
    console.log(error);
  }
};

export const query = async () => {
  try {
    const greeterContract = createEthereumContract();
    console.log(await greeterContract.greeting());
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install MetaMask.");

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    return accounts
  } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
  }
};

