//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Toaster is Ownable {
    string public toast;

    constructor() {}

    function returnToast() public view returns (string memory) {
        return toast;
    }

    function setToast(string memory _toast) public onlyOwner {
        console.log("Setting toast to: ", _toast);
        toast = _toast;
    }
}
