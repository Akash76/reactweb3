const { ethers } = require("hardhat");

(async () => {
    const Balance = await ethers.getContractFactory("Balance");
    const balance = await Balance.deploy();
    await balance.deployed();

    try {
        await balance.setData("Hi", { value: 1 })
        let ownerBalance = await balance.getOwnerBalance()
        let contractBalance = await balance.getBalance()
        console.log(`
            owner: ${ownerBalance}
            contract: ${contractBalance}
        `)
        await balance.withDraw()
        ownerBalance = await balance.getOwnerBalance()
        contractBalance = await balance.getBalance()
        console.log(`
            owner: ${ownerBalance}
            contract: ${contractBalance}
        `)
    } catch (error) {
        console.log(error.message)
    }
})();
