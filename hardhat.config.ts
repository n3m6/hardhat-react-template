import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-solhint";
import "solidity-coverage";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
        details: {
          yul: false
        }
      }
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.ACCOUNT_KEY!],
      chainId: 11155111,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.ACCOUNT_KEY!],
      chainId: 5,
      gas: 2100000,
      gasPrice: 8000000000,
      timeout: 60000
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.ACCOUNT_KEY!!],
      chainId: 1,
    },
  }
};

export default config;
