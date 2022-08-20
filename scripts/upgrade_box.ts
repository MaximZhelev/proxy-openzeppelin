import { ethers, upgrades } from "hardhat";

const PROXY = "0xd9F9304329451Dd31908BC61C0F87e2AA90aacD6";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  await upgrades.upgradeProxy(PROXY, BoxV2);
  console.log("Box upgraded");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
