const { ethers } = require("hardhat");

(async () => {
    const Modifier = await ethers.getContractFactory("Modifier");
    const modifier = await Modifier.deploy();
    await modifier.deployed();

    try {
        await modifier.testingTest();
    } catch (error) {
        console.log(error.message)
    }
})();
