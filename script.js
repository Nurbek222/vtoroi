// alert('it is true');

// let name_ ="Nurbek";
// console.log(name_);

// let firstname = prompt('Введите имя');
// let lastname;
// let firstname1
// if(firstname =='Nurbek'){
//   lastname = prompt('Введите фамилию');
// }
// else {
	
// 		firstname = prompt('введите правильно');
	

// 	if (firstname == 'Nurbek') {
// 		lastname = prompt('Введите фамилию');
// 	}
// 	else {
// 		 firstname = prompt('попробуйте еще раз'); 

// 		if (firstname == 'Nurbek') {
// 			lastname = prompt('Введите фамилию');
// 		}
// 		else {
// 			firstname = confirm('Прошу обновить страничку');
// 		}
// 	}
// }

// if(lastname=='Abylov'){
//     console.log('name:'+ firstname,',','lastname:'+ lastname)
// }


// let number1=+prompt('Ввести число')
// let operator1= prompt('ввести оператора')
// let number2=+prompt('ввести 2-ое число')
// if(operator1=='+'){
//   console.log(number1 +number2);
// }

var arr = ['apple', 'orang', 'pear'];
arr.forEach(function(item,i,arr) {
	console.log (i + ':' + item + '(massiv :' + arr+')')
});

var arrf = [1,9,5,-3,7,8];
var positivNum = arrf.filter(function(number){
	return number> 0;
});
console.log(positivNum);

var arrf1 = [1,-3,3,6,-6,4];
function isPositiv(number){
	return number > 0
}
console.log(arrf1.every(isPositiv));
console.log(arrf1.some(isPositiv));

var names = ['html', 'css', 'javascript'];
var nameLength = names.map(function(names){
	return names.length;
});
console.log(nameLength)

