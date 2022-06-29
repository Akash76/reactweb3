const hre = require("hardhat");

async function main() {
  const Toaster = await hre.ethers.getContractFactory("Scorpion");
  const toaster = await Toaster.deploy();

  await toaster.deployed();

  console.log("Scorpion deployed to:", toaster.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
