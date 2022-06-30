// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Balance is Ownable {
    string data;

    function getOwner() public view onlyOwner returns (address) {
        return owner();
    }

    function setData(string memory _data) public payable {
        data = _data;
    }

    function getBalance() public view onlyOwner returns (uint256) {
        return address(this).balance;
    }

    function getOwnerBalance() public view onlyOwner returns (uint256) {
        return owner().balance;
    }

    function withDraw() public onlyOwner {
        uint256 balance = address(this).balance;
        console.log("Balance:", balance);
        payable(owner()).transfer(balance);
    }

    receive() external payable {}
}
