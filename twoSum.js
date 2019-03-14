function twoSum (arr, sum){
  for (let i = 0; i < arr.length -1; i++){
    for (let j = i +1; j < arr.length; j++){
      if (arr[i] + arr[j] === sum){
        return [i,j]
      }
    }
  }
 return ([]);
}

module.exports = twoSum;
