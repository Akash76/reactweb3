require('dotenv').config()
const ethers = require("ethers")
const contract = require("../src/artifacts/contracts/Greeter.sol/Greeter.json");

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const greeterContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

(async () => {
    // await greeterContract.setGreeting("Paradox")
    const greeting = await greeterContract.greeting()
    console.log(greeting)
})()