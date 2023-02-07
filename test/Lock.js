const {
	time,
	loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ERC721", function () {

	async function contractFixutre() {
		const ERC721 = await hre.ethers.getContractFactory("ERC721TEST");
		const erc721 = await ERC721.deploy();
		await erc721.deployed();

		return erc721
	}

	describe("Deployment", function () {
		it("Should set the right unlockTime", async function () {
			const erc721 = await loadFixture(contractFixutre);

			expect(await erc721.name()).to.equal("MyToken");
		});

		
	});

});
