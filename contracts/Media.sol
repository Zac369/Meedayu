pragma solidity ^0.8.10;

import "@openzeppelin/contract/token/ERC721/ERC721.sol";
import "@openzeppelin/contract/token/ERC721/extensions/ERC721URIStorage.sol";

contract Media is ERC721URIStorage {

	uint256 public tokenCounter;

	constructor () ERC721 ("Meeda", "MEED") {
		tokenCounter = 0;
	}

	function createMedia(string memory tokenURI) public returns (uint256) {
		uint256 newItemId = tokenCounter;
		_safeMint(msg.sender, newItemId);
		_setTokenURI(newItemId, tokenURI);
		tokenCounter += 1;
		return newItemId;
	}


}