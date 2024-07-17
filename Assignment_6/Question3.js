function computeDash(num) {
  let str = num.toString();
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result.push('-');
    }
    result.push(str[i]);
  }

  return result.join('');
}

let number = '025468';
console.log('Dash inserted:', computeDash(number));
