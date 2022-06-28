const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

(async () => {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, world!");
  await greeter.deployed();

  try {
    await greeter.setGreeting("OKKKK", { value: 10 })    
  } catch (error) {
    console.log(error.message)
  }
  
  console.log(await greeter.greet())
});

(async () => {
  const Toaster = await ethers.getContractFactory("Toaster");
  const toaster = await Toaster.deploy();
  await toaster.deployed();

  try {
    const setToastTx = await toaster.setToast("Hellooo")
    await setToastTx.wait();

    console.log(await toaster.returnToast());
  } catch (error) {
    console.log(error.message)
  }
})()
