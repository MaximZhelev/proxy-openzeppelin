// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.6;

import "hardhat/console.sol";

contract Box {
    uint256 private _value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        _value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}
