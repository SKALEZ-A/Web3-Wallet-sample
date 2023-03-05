require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/wpZtML_4vITmOejbd0dpEtZzWML2lu5K",
			accounts: [
				"52c3aed934268c23a403cedefc3b3e00d50328c06f9a4adb9ec0533cf2763fa9",
			],
		},
	},
};
