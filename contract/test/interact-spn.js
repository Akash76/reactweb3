require('dotenv').config()
const ethers = require("ethers")
const contract = require("../src/artifacts/contracts/Scorpion.sol/Scorpion.json");

const API_KEY = "AvRAwdtpuVlQunDRerWd80ULo4iW60X5";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = "0x30d1b6AdEdd1074e00DeC80577ED8B042Fa5B09b";

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const scorpion = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

(async () => {    
    const greeting = await scorpion.safeMint("0xF840E04c91E1c55534dCD8ECF6E144804418B39B", "https://www.koe.com")
    console.log(greeting)
})()