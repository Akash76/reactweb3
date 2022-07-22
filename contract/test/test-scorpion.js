const { ethers } = require("hardhat");

(async () => {
    const Scorpion = await ethers.getContractFactory("Scorpion");
    const scorpion = await Scorpion.deploy();
    await scorpion.deployed();

    try {
        const tokenId = await scorpion.safeMint("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199", "https://google.com")
        tokenId.wait();
        // console.log(tokenId)

        const tokenUrl = await scorpion.tokenURI(0)
        console.log(tokenUrl)
    } catch (error) {
        console.log(error.message)
    }
})();