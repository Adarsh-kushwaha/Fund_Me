const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeedAdd: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    31337: {
        name: "localhost",
    },
}

const developmentChains = ["hardhat", "localhost"];
const DECIMAL = 8;
const INITIAL_ANS = 200000000000;

module.export = { networkConfig, developmentChains, DECIMAL, INITIAL_ANS };