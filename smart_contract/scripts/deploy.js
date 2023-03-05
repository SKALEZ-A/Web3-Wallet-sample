const main = async () => {
	const Transactions = await hre.ethers.getContractFactory("Transactions");
	const transactions = await Transactions.deploy();

	await transactions.deployed();

	console.log("Transaction deployed to: ", transactions.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

runMain();

// deployed contract address: 0x5eBaD564891FcA3AAe82CA17C8a28E599D19c04e
