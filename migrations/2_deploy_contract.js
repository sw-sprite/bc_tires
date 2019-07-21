var Tires = artifacts.require("./Tires.sol");

module.exports = function(deployer) {
  deployer.deploy(Tires);
};
