pragma solidity ^0.8.10;

import "@openzeppelin/contract/token/ERC721/ERC721.sol";

contract Media is ERC721 {

	uint256 public tokenCounter;

	constructor () public ERC721 ("Meeda", "MEED") {
		tokenCounter = 0;
	}

	function createMedia(string memory tokenURI) public return (uint256) {
		uint256 newItemId = tokenCounter;
		_safeMint(msg.sender, newItemId);
		_setTokenURI(newItemId, tokenURI);
		tokenCounter += 1;
		return newItemId;
	}


}