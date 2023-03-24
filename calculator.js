function calculator(string) {
  const digits = {
  C:100,
  XC:90,
  L:50,
  XL:40,
  X:10,
  IX:9,
  V:5,
  IV:4,
      III:3,
  II:2,
  I:1
};                        
  function romeToArab(string){
    return string.toUpperCase().split('').reduce(function(s,v, i, arr){
      const[a, b, c]=[
        digits[arr[i]],
        digits[arr[i+1]],
        digits[arr[i+2]]
      ];
      return b>a ? s-a : s+a;
    }, 0)
  }
  function arabToRome(num){
    if(num < 1)
      return '';
    let result = '';
    for (key in digits)
      while (num >= digits[key]){
    result += key;
    num -= digits[key];    
  }
  return result;
  }
  // код пишите внутри этой функции
  let letter =[];
  string = string.replace(/[^IVXLC\d+\-*\/]/gi, ch=>{
                          if(ch != ' ') letter.push(ch);
  return '';
  });
if(letter.length > 0)
  throw Error('Символы не допустимы, Вы ввели это: ' + letter);
  let vars = string.split(/[+\-*\/]/g)
  if(vars.length !==2)
    throw Error('Должно быть 2 операнда');
  const rome = /^[IVXLC]+$/i;
  const r = vars.reduce((s,v) => s + rome.test(v), 0);
  if(r === 1)
    throw Error ('Оба числа должны быть арабскими или римскими числами!');
  else if (r === 2)
vars = vars.map(v=> romeToArab(v));
  if(vars.some(v=> v<1 || v>10))
    throw Error('Введите допустимое значение от 1 до 10!');
  let acr = string.match(/[+\-*\/]/)[0]
  let result = Math.floor(eval(vars.join(acr)));

return r===0 ? result.toString() : arabToRome(result);  
}


module.exports = calculator; // Не трогайте эту строчку