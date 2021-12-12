// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Contract declaration
contract Inbox {
    // Storage variable declaration
    bytes32 public message;

    // Constructor declaration
    constructor(bytes32 initialMessage) {
        message = initialMessage;
    }

    // Declare setter function
    function setMessage(bytes32 newMessage) public {
        message = newMessage;
    }

    // Declare getter function
    function getMessage() public view returns (bytes32) {
        return message;
    }
}
