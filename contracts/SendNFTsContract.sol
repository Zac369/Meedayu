// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import './Media.sol';

contract SendNFTsContract is VRFConsumerBase {
    struct GiftNFTsRequest {
      address[] addresses;
      uint transferNumber;
      uint[] NftIds;
    }

    mapping(bytes32 => GiftNFTsRequest) private giftStructs;
    
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 internal randomResult;
    address addressMedia;

    // polygon testnet
    // LINK Token	0x326C977E6efc84E512bB9C30f76E30c160eD06FB
    // VRF Coordinator	0x8C7382F9D8f56b33781fE506E897a4F1e2d17255
    // Key Hash	0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4
    // Fee	0.0001 LINK

    constructor() 
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255, // VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB  // LINK Token
        )
    {
      keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
      fee = 0.0001 * 10 ** 18;
    }

    function setAddressMedia(address _addressMedia) external {
        addressMedia = _addressMedia;
    }

    // transfer your NFTs to a number of your followers, chosen at random
    function giveNFTs(address[] memory addresses, uint howMany, uint[] memory ids) public {
      bytes32 requestID = getRandomNumber();

      giftStructs[requestID].addresses = addresses;
      giftStructs[requestID].transferNumber = howMany;
      giftStructs[requestID].NftIds = ids;

      // you will have to pass in and store in giftStructs the NFTs you are giving away
    }
    
    function getRandomNumber() public returns (bytes32 requestId) {
      require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
      return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestID, uint256 randomness) internal override {
      randomResult = randomness;

      uint256[] memory randomNumbers = expand(randomResult, giftStructs[requestID].transferNumber, giftStructs[requestID].addresses.length);

      for(uint i = 0; i <= randomNumbers.length; i++) {
        //transfer one of the NFTs to giftStructs[requestID].addresses[randomNumbers[i]];
        Media media = Media(addressMedia);
        media.approve(giftStructs[requestID].addresses[randomNumbers[i]], giftStructs[requestID].NftIds[i]);
        media.safeTransferFrom(msg.sender, giftStructs[requestID].addresses[randomNumbers[i]], giftStructs[requestID].NftIds[i]);
      }
    }

    // get multiple random numbers from the one from Chainlink (the random number, the amount you need, the max value of the random numbers)
    function expand(uint256 randomValue, uint256 n, uint256 maxValue) public pure returns (uint256[] memory expandedValues) {
      expandedValues = new uint256[](n);

      for (uint256 i = 0; i < n; i++) {
          expandedValues[i] = uint256(keccak256(abi.encode(randomValue, i))) % maxValue;
      }
      return expandedValues;
    }
}