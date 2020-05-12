//
// let conteiner = document.querySelector('.tip');
// console.log(conteiner);
// let spanText = document.querySelector('.text');
// console.log(spanText);
// let paragraph = document.querySelector('.hello');
// console.log(paragraph);
// spanText.textContent = paragraph.dataset.tooltip;
var findBtn = function (arg) {
  var tag = document.querySelector(arg)
  console.log(tag)
  console.log('вывело строчку')
  return tag
}
var G = '.btnT'
var btnOther = findBtn(G)
var btnOther = findBtn('.btnT')



var expOther = function () {
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  return '.hello'
}

// var T = expOther()
// console.log('вывели эту строчку: ' + T)



btnOther.onclick = function () {
  var x = findBtn(expOther())
  // x = findBtn('.hello')
  x.classList.toggle('white')
  console.log(total)
}
// btnOther.onclick()
// btnOther.onclick()
  // console.log(total);
// var marisha = summeExp(4, 6);
// summeExp(15, 23);
// summeExp(154, 231);
// var exp = marisha + 100;
// console.log('результат: ' + exp);
// console.log(z, h, i);
// sumTotal = z + h + i;
// console.log(sumTotal)

var onclickExp = function (name_class, add_class) {

  //какой то код
  return 6;
};


var borz = onclickExp('.exp', 'red');
// borz.classList.add('green');
// x.classList.remove('green')
// onclickExp('.tip', 'red')

console.log(borz);


let btn1= document.querySelector('.btn1');

console.log(btn1)
btn1.onclick = function () {
  var element = document.querySelector('.hello')
  element.classList.toggle('green')
  element.textContent = 'молодец';
  console.log('hi')
}
btn1.onclick()
btn1.onclick()
btn1.onclick()
btn1.onclick()


var object_exp  = {
  name_class_x: '.exp',

  onclick_obj: function f(name_class) {
    var element1= document.querySelector(name_class);
    element1.classList.toggle('red')
  },
}
// var h = 'perem';

var obD = {
  x: 4,
  y: 5,
  z: 'result function',
  funDigit: function () {
    var total = this.x + this.y
    console.log(total + ':  ' + this.z)
  },
}
console.log(obD.x)

// console.log()
// var console = {
//   log: function () {
//     return
//   }
// }
//
//
// console.log(obD.y)
// console.log(obD.z)
// console.log(obD.funDigit())
//



// onclick();
// console.log(object_exp.name_class_x)
//
// console.log('text ' + 'y');

let x = function(t,v1,v2) {

  let s1= t * v1;
  let s2 = t * v2;
  let s = s1 + s2;
  console.log(s);
  if (s < 100) {
    return 0
  }
  else {
    return 1
  }
}
let i = 67;
let j = 87;
let k = 32;
let h = x(i,j,k);
console.log(h);
if (h) {
 let winFirst = document.querySelector('.exp');
  winFirst.classList.add('red');
  console.log('1 действие');
}
else {
  winFirst.classList.add('blueviolet');
}


let adress = function(number) {
  blok = document.querySelector('.text');

  return number == 123 ? blok.classList.add('white') : blok.classList.remove('white');


}
console.log(adress(123))

let g = function() {
  console.log('первый пример');
  return
}
console.log(g());

let s = function() {
  console.log('второй пример');
}
console.log(s());

let p = function(x) {
  z = x + 1
  console.log('третий  пример');
  return z
}
console.log(p(2));
x =2

console.log(adress('123'));
console.log(adress())

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

// x=(функция)_(_значения для переменных через запятую_)_

console.log(
  (function () {
  return z = 3
})()
)

exp = function (h) {
  return z = h + 3
}
console.log('exp: ' + exp)
let f = exp(8)
let r = 4;
console.log('f: ' + f)
test = exp
console.log('test:' + test)
y = test(89)
console.log('y: ' + y)

y = exp(10)
console.log('y: ' + y)
l = console.log

