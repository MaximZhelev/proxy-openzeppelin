import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Box", function () {
  async function deployBoxFixture() {
    const Box = await ethers.getContractFactory("Box");
    const box = await Box.deploy();

    return { box };
  }

  it("retrieve returns a value previously stored", async function () {
    const { box } = await loadFixture(deployBoxFixture);
    await box.store(42);

    expect((await box.retrieve()).toString()).to.equal("42");
  });
});
