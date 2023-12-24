require('@matterlabs/hardhat-zksync-solc');
require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  solidity: '0.8.19',
  networks: {
    sepolia: {
      url: `${process.env.ALCHEMY_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
