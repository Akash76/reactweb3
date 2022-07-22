const { ethers } = require("hardhat");

(async () => {
    const Mappable = await ethers.getContractFactory("Mappable");
    const mappable = await Mappable.deploy();
    await mappable.deployed();

    try {
        let Akash = await mappable.setMap("Akash", true)
        await Akash.wait()
        let Shiva = await mappable.setMap("Shiva", true)
        await Shiva.wait()
        let Preethi = await mappable.setMap("Preethi", false)
        await Preethi.wait()

        const value = await mappable.getMap("Akash")
        console.log(await mappable.getMap("Akash"), await mappable.getMap("Shiva"), await mappable.getMap("Preethi"))
    } catch (error) {
        console.log(error)
    }
});

(async () => {
    const Mappable = await ethers.getContractFactory("Mappable");
    const mappable = await Mappable.deploy();
    await mappable.deployed();

    try {
        await mappable.incrementCount("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199");
        await mappable.incrementCount("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199");
        await mappable.incrementCount("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199");

        let count = await mappable.getCount("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199");
        console.log(Number(count))
    } catch (error) {
        console.log(error.message)
    }
})()