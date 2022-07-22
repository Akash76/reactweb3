require('dotenv').config()
const ethers = require("ethers")
const contract = require("../src/artifacts/contracts/Scorpion.sol/Scorpion.json");

const API_KEY = process.env.API_KEY_SCORP;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = "0x95C1144a506E998ac7d1a88073D538ECC0db3af3";

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "maticmum", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const scorpion = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

(async () => {
    try {
        const tokenId = await scorpion.safeMint("0x87F0e13B7FE4943Bf6Ed27F5002E40fF1ac49ADB", "https://gateway.pinata.cloud/ipfs/QmeeighUTm2GYsvbYHDSUGRXw33Kwn6ndkjdkCaDMiUCEN")
        await tokenId.wait();
        console.log("Minted:", tokenId)

        // const tokenUrl = await scorpion.balanceOf("0x87F0e13B7FE4943Bf6Ed27F5002E40fF1ac49ADB")
        // console.log(Number(tokenUrl))
    } catch (error) {
        console.log(error.message)
    }
})()