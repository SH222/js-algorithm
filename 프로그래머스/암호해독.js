// 암호 해독

// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  var num1Val = my_string.filter((item, index) => index === num1).join("");
  var num2Val = my_string.filter((item, index) => index === num2).join("");
  my_string[num1] = num2Val;
  my_string[num2] = num1Val;
  return my_string.join("");
}

// 역대급 구린 코드..
// 더 줄일 수는 없는건가

// 다른 사람의 코드 중 가장 인상 깊었던 것
// 배열에 값 넣을때 한번에 여러개 넣을 수 있구나
// function solution(my_string, num1, num2) {
//   my_string = my_string.split("");
//   [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]
//   return my_string.join("");
// }
