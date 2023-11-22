// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract NexthFT is ERC721, Ownable {
  uint256 private _tokenIdCounter;

  constructor() ERC721('NexthFT', 'NFT') {}

  function safeMint(address to) public onlyOwner {
    uint256 tokenId = _tokenIdCounter;
    _tokenIdCounter += 1;
    _safeMint(to, tokenId);
  }
}
