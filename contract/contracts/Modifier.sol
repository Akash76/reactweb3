// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Modifier {
    uint128 a = 10;
    modifier Test() {
        _;
        if (a == 10) {
            a += 10;
        }
    }

    function testingTest() public Test {
        if (a == 20) {
            a = 100;
        }

        console.log(a);
    }
}
