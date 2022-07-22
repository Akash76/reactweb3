// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Mappable {
    mapping(string => bool) public maps;
    mapping(address => uint256) public count;

    function setMap(string memory name, bool set) public {
        maps[name] = set;
    }

    function incrementCount(address addr) public {
        uint256 temp = count[addr];
        ++temp;
        count[addr] = temp;
    }

    function getCount(address addr) public view returns (uint256) {
        return count[addr];
    }

    function getMap(string memory name) public view returns (string memory) {
        if (maps[name]) {
            return "Yes";
        }
        return "No";
    }
}
