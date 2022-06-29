const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

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
});

(async () => {
  const Scorpion = await ethers.getContractFactory("Scorpion");
  const scorp = await Scorpion.deploy();
  await scorp.deployed();

  try {
    let id = await scorp.safeMint("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", "https://abc.com")
    console.log(id)
  } catch (error) {
    console.log(error.message)
  }

})();

(async () => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

