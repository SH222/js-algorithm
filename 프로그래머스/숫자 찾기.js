function solution(num, k) {
  let arr = num.toString().split("");
  // for(let i=0; i<num.length; i++)
  let answer = arr.forEach((item, index) => item === k);

  return answer;
}

solution(29183, 3);
