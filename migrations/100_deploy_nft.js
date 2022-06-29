const Nft = artifacts.require('GrabCoinClubArtifacts');



module.exports = async (deployer) => {
  await deployer.deploy(Nft);
};
