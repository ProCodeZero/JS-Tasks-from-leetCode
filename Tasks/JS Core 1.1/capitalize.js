// Реализуйте функцию capitalize, которая принимает строку в качестве
// аргумента и возвращает новую строку, в которой первые буквы слов
// заглавные, а все остальные - строчные.

function capitalize(str) {
  str = str.toLowerCase();
  let newString = str.split(' ').map(item => {
    item = item.replace(item[0], item[0].toUpperCase());
    return item;
  }).join(' ');
  return newString;
}

console.log(capitalize('hEllo mIster denis!'));