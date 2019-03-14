function wrap (string, number) {
  let newString = ''
  let counter = 0;

  for (let i = 0; i < string.length; i++){
    if (counter < number){
      newString += string[i]
      counter++;
    } else {
      newString += '\n' + string[i]
      counter = 0
    }
  }

  return newString;
}

module.exports = wrap;
