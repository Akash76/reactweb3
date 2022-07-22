require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    toastGoerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.API_KEY_TOASTER}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    scorpion: {
      url: `https://eth-goerli.alchemyapi.io/v2/AvRAwdtpuVlQunDRerWd80ULo4iW60X5`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
};

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// Greeter => 0x810Dc166CF07Aa3386DA8AfBdDEB18Ec057c8C6b
// Greeter-Goerli => 0x810Dc166CF07Aa3386DA8AfBdDEB18Ec057c8C6b
// Toaster => 0x22830681102aB1c6B1AfA15eEa3dB861BFE170C1
// Scorpion-Goerli => 0x30d1b6AdEdd1074e00DeC80577ED8B042Fa5B09b


//spn-localhost => 0x5FbDB2315678afecb367f032d93F642f64180aa3