function performOperation(token, stack, register) {
  switch (token) {
    case 'PUSH':
      return pushRegisterToStack(stack, register);
    case 'POP':
      return popTopmostItemFromStack(stack);
    case 'MULT':
      return multPoppedElementWithRegister(stack, register);
    case 'DIV':
      return divRegisterByPoppedElement(stack, register);
    case 'REMAINDER':
      return remainderOfRegisterDivByPoppedElement(stack, register);
    case 'ADD':
      return addPoppedElementWithRegister(stack, register);
    case 'SUB':
      return subtractPoppedElementFromRegister(stack, register);
    default:
      return null;
  }
}

function popTopmostItemFromStack(stack) {
  return stack.pop();
}

function pushRegisterToStack(stack, register) {
  stack.push(register);
  return register;
}

function multPoppedElementWithRegister(stack, register) {
  let product = popTopmostItemFromStack(stack) * register;
  return product;
}

function divRegisterByPoppedElement(stack, register) {
  let quotient = register / popTopmostItemFromStack(stack);
  return Math.trunc(quotient);
}

function remainderOfRegisterDivByPoppedElement(stack, register) {
  let result = register % popTopmostItemFromStack(stack);
  return Math.trunc(result);
}

function addPoppedElementWithRegister(stack, register) {
  let sum = popTopmostItemFromStack(stack) + register;
  return sum;
}

function subtractPoppedElementFromRegister(stack, register) {
  let difference = register - popTopmostItemFromStack(stack);
  return difference;
}

function printRegister(register) {
  console.log(register);
}

function minilang(program) {
  let tokens = program.split(' ');
  let stack = [];
  let register = 0;

  tokens.forEach(token => {
    if (!isNaN(Number(token))) {
      register = Number(token);
    } else if (token === 'PRINT') {
      printRegister(register);
    } else {
      register = performOperation(token, stack, register);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)