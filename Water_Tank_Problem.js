function solve(arr) {
  var lenA = arr.length;
  var res = [];
  let [leftMax, rightMax] = getMaxArraysOnBothSides(arr, lenA);
  for(let i = 0; i < lenA; i++) {
    if ((i == 0 || i == lenA - 1)) {
        res.push(arr[i]);
        continue
    }
    res.push(Math.max(arr[i], Math.min(leftMax[i], rightMax[i])));
  }
  let units = 0;
  let water= []
  for(let j = 0; j < lenA; j++) {
      water.push(res[j]-arr[j]);
    units += res[j] - arr[j];
  }
  console.log("water array is ", water)
  return units;
}

function getMaxArraysOnBothSides(arr, lenA) {
  var leftMax = [];
  var rightMax = [];
  for (let i = 0; i < lenA; i++) {
    if (i == 0) {
      leftMax.push(0);
      continue;
    }
    leftMax.push(Math.max(arr[i - 1], leftMax[i - 1]));
  }
  for (let i = lenA - 1; i > -1; i--) {
    if (i == lenA-1) {
      rightMax.push(0);
      continue;
    }
    rightMax.push(Math.max(arr[i + 1], rightMax[lenA - i - 2]));
  }
  return [leftMax, rightMax.reverse()];
}

console.log( "ans is ", solve([4,0,0,10,0,0,6]));
