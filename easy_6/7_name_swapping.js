function swapName(string) {
  let fullNameArray = string.split(' ');
  let firstName = fullNameArray[0];
  let lastName = fullNameArray[1];

  let swappedName = `${lastName}, ${firstName}`;
  return swappedName;
}

swapName('Joe Roberts');    // "Roberts, Joe"