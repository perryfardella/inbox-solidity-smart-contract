// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// Contract declaration
contract Inbox {
    // Storage variable declaration
    string public message;

    // Constructor declaration
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // Declare setter function
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // Declare getter function
    function getMessage() public view returns (string memory) {
        return message;
    }
}
