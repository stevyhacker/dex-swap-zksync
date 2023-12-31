import { HardhatUserConfig } from "hardhat/config"
import { join } from "path"
import dotenv from "dotenv"
import "@nomicfoundation/hardhat-toolbox"
import path from "path";

dotenv.config() // project root
dotenv.config({ path: join(process.cwd(), "../../.env") }) // workspace root

const deployerKey = process.env.DEPLOYER_KEY
if (!deployerKey) {
    console.warn("DEPLOYER_KEY not found in .env file. Running with default config")
}
const etherscanApiKey = process.env.ETHERSCAN_API_KEY ?? ""
if (!etherscanApiKey) {
    console.warn("ETHERSCAN_API_KEY not found in .env file. Will skip Etherscan verification")
}
const polygonApiKey = process.env.POLYSCAN_API_KEY ?? ""
if (!polygonApiKey) {
    console.warn("POLYSCAN_API_KEY not found in .env file. Will skip Etherscan verification")
}

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    paths: {
        sources: path.resolve(__dirname, "./"),
        artifacts: path.resolve(__dirname, "./artifacts"), 
    },
    etherscan: {
        apiKey: {
            mainnet: etherscanApiKey,
            sepolia: etherscanApiKey,
            polygonMumbai: polygonApiKey,
        },
    },
    solidity: {
        compilers: [
            // {
            //     version: "0.8.21",
            //     settings: {
            //         optimizer: {
            //             enabled: true,
            //             runs: 200,
            //         },
            //     },
            // },
            {
                version: "0.7.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
            url: "http://127.0.0.1:8545",
        },
        // sepolia: {
        //     chainId: 11155111,
        //     url: "https://rpc.sepolia.org/",
        //     accounts: [deployerKey as string],
        // },
        // mumbai: {
        //     chainId: 80001,
        //     url: "https://rpc-mumbai.maticvigil.com/",
        //     accounts: [deployerKey as string],
        // },
    },
}

export default config
