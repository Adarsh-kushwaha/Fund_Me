require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
//0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e

const rpc_url = process.env.RINKEBY_RPC_URL;
const private_key = process.env.PRIVATE_KEY;
const etherscan_Api_Key = process.env.ETHERSCAN_API_KEY;

module.exports = {
  //solidity: "0.8.17",
  solidity: {
    compilers: [
      { version: "0.8.17" },
      { version: "0.6.6" }
    ]
  },
  etherscan: {
    apikey: etherscan_Api_Key,
  },
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: rpc_url,
      account: [private_key],
      chainId: 4,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
};
