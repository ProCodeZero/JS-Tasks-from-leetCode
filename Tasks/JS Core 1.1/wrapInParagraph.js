// Реализуйте функцию wrapInParagraph, которая принимает на вход текст, 
// разделененный переносами строк и возвращает новый текст, в котором 
// каждая строка обернута в тег


function wrapInParagraph(text) {
    let newText = text.split(`\n`).map(item => {
      let item1 = [];
      item1 = item.split('');
      item1.push(`</p>`);
      item1.unshift(`<p>`);
      item = item1.join('');
      return item
    }).join(`\n`);
    return newText
  }
  
  const a = `Some
  simple multiline
  text`;
  console.log(wrapInParagraph(a));


/*function wraplnParagraph(text) {
    var arr = text.split('\n');
    var subArr = [];
    var arr2 = [];
    var newString;
    arr.forEach(function(element) {
        subArr = element.split('');
        subArr.unshift(`<p>`);
        subArr.push(`</p>`);
        element = subArr.join('');
        arr2.push(element);
    })

    newString = arr2.join(`\n`);
    return newString;
}
var a = `Some
simple multiline
text`;
console.log(wraplnParagraph(a));
*/

/*function wraplnParagraph(text) {
    var str = '<p> </p>'
    var arr = text.split('\n');
    var arr2 = [];
    arr.forEach(function(element) {
        v = str.replace(' ', element);
        arr2.push(v);
    })

    newString = arr2.join(``);
    return newString;
}
var a = `Some
simple multiline
text`;
console.log(wraplnParagraph(a));
*/