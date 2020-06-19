pragma solidity >=0.5.8;

contract BurnMoney {
  
  address payable public owner_tiger;
  address payable public owner_yeezy;
  uint256 public createdAt;
  uint private burnFees;
  
  // Constructor for creating the contract
  constructor (
    address payable _owner_tiger,
    address payable _owner_yeezy
  ) public {
    owner_tiger = _owner_tiger;
    owner_yeezy = _owner_yeezy;
    createdAt = now;
  }

  // Event to be emitted when this contract gets money
  event Burn(
      address indexed _burner,
      uint256 indexed _amountBurned
  );

  // When it receives ETH, it 
  //  1. Calculates the fee and adds it to this contract
  //  2. Emits an event to show who sent it and how much.
  function () payable external {
    burnFees += msg.value / 20;
    emit Burn(msg.sender, msg.value);
  }

  // Only the owner can withdraw the accumulated burn fees.
  // After the transfer, reset the burn fee.
  function withdrawFees() ownerOnly public {
    owner_yeezy.transfer(burnFees/2);
    owner_tiger.transfer(burnFees/2);
    burnFees = 0;
  }
  
  modifier ownerOnly {
    require(msg.sender == owner_tiger || msg.sender == owner_yeezy);
    _;
  }
}
