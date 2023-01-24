function solution(price, money, count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += price;
    console.log(total);
  }
  return Math.abs(money - total);
}

// console.log(solution(3, 20, 4));
