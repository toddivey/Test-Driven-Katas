function wrap (string, number) {
  let newString = ''
  let counter = 0;
  if (number === 0){
    return ''
  } else{
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
}
module.exports = wrap;


// function wrap(line, maxLen){
//   if (line.length <= maxLen){
//     return line;
//   }
//   const indexOfBlank = line.lastIndexOf(' ',maxLen);
//   let split;
//   let offset;
//   if (indexOfBlank > -1){
//     split = indexOfBlank;
//     offset =1;
//   } else {
//     split = maxLen;
//     offset =0;
//   }
//   return line.substring(0, split) + "\n" + wrap(line.substring(split + offset), maxLen)
// }
