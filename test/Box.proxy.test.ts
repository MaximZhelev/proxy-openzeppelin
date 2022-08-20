import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Box (proxy)", function () {
  async function deployBoxProxyFixture() {
    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });

    return { box };
  }

  it("retrieve returns a value previously initialized", async function () {
    const { box } = await loadFixture(deployBoxProxyFixture);

    expect((await box.retrieve()).toString()).to.equal("42");
  });

  it("increment value", async function () {
    const { box } = await loadFixture(deployBoxProxyFixture);
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const upgraded = await upgrades.upgradeProxy(box.address, BoxV2);

    await upgraded.increment();
    expect((await upgraded.retrieve()).toString()).to.equal("43");
  });
});
