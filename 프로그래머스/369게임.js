function solution(order) {
  var count = 0;
  var arr = order.toString().split("");
  var answer = arr.forEach((item) => {
    parseInt(item) === 3 || parseInt(item) === 6 || parseInt(item) === 9 ? (count += 1) : null;
  });
  return count;
}

console.log(solution(3));
console.log(solution(29423));
