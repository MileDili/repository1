'use strict'
let [x, y] = ['111111', '222222'];
let [a1, a2, ...a3] = "Lorem ipsum dolor sit amet.".split('');
console.log(a1);
console.log(a3);


// ----------------------------

function fun1(f1 = 5, f2 = 5) {
	f2 = f2||5;
	console.log( f1 + f2);
};
fun1();

// ----------------------

function fun2(...f) {
	f.forEach ( function (element, index) {
		console.log(element);
	});
}
fun2(1,2,3);

// ----------------------------

let fun3 = (t1, t2) => {
	let rez = t1 + t2;
	return rez;
};

fun3(2,4);

// -----------------------

let ob = {
	text: "text - ",
	arr: ['Lorem', 'imsum', 'dolor'],
	funArr: function () {
		this.arr.forEach (  (i) => {
			console.log(this.text + '' + i);
		});
	}
// funArr: function () {              пример с ошибкой!!!
// 		this.arr.forEach ( function (i) {
// 			console.log(this.text + '' + i);
// 		});
// 	}
}
ob.funArr();
