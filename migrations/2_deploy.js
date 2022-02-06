const Media = artifacts.require("Media");
const SendNFTsContract = artifacts.require("SendNFTsContract");

module.exports = function (deployer) {
  deployer.deploy(Media);
  deployer.deploy(SendNFTsContract);
};