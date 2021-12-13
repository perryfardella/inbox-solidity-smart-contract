async function main() {
    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("Perry Fardella was here!");
  
    console.log("The inbox smart contract deployed to:", inbox.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });