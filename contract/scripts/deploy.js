const hre = require("hardhat");

async function main() {
  const Toaster = await hre.ethers.getContractFactory("Toaster");
  const toaster = await Toaster.deploy();

  await toaster.deployed();

  console.log("Toaster deployed to:", toaster.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
