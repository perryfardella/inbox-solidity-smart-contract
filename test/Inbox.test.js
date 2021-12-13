const { expect } = require("chai");

describe("Inbox", () => {
  it("should return its stored message", async () => {
    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("Perry Fardella was here!");

    await inbox.deployed();
    expect(await inbox.getMessage()).to.equal("Perry Fardella was here!");
  });
  it("should change its stored message when requested", async () => {
    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("Perry Fardella was here!");

    await inbox.setMessage("Perry Fardella was here, again!");
    expect(await inbox.getMessage()).to.equal("Perry Fardella was here, again!");
  });
});