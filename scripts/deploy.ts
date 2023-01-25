import { ethers } from "hardhat";

async function main() {

  const Sample = await ethers.getContractFactory("Sample");
  console.log(`Contract getting deployed ...`);
  const contract = await Sample.deploy();
  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
