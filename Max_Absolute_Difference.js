function solve(A) {
  var lenA = A.length;
  if (lenA < 2) return 0;
//   for (let i = 0; i < lenA; i++) {
//     A[i] = [A[i], i];
//   }
  //A.sort((a, b) => a[0] - b[0]);
  (i = 0), (j = lenA - 1);
  var maxN = Number.MIN_SAFE_INTEGER;
  while (i < j) {
    var maxN = Math.max(
      maxN,
      Math.abs(A[i] - A[j]) + Math.abs(i - j)
    );
    i++
    j--
  }
  return maxN;
}
console.log(solve([ 1, 3, -1 ]))