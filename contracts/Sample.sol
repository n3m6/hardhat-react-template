// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Sample {

    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert UnauthorisedError("method can be called only by the owner");
        _;
    }

    error UnauthorisedError(string message);
}
