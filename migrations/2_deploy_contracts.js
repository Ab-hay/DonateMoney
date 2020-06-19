var BurnMoney = artifacts.require("BurnMoney");

module.exports = function(deployer) {
    deployer.deploy(BurnMoney, "0x0D1197559F4DF0e870563f9d007C5c438FfC63F7", "0x2aA43A401B49fcF28F0298AA0EAeCc263DC1b833");
};
