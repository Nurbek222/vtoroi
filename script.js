alert('it is true');

let name_ ="Nurbek";
console.log(name_);

let firstname = prompt('Введите имя');
let lastname;
let firstname1
if(firstname =='Nurbek'){
  lastname = prompt('Введите фамилию');
}
else {
	
		firstname = prompt('введите правильно');
	

	if (firstname == 'Nurbek') {
		lastname = prompt('Введите фамилию');
	}
	else {
		 firstname = prompt('попробуйте еще раз'); 

		if (firstname == 'Nurbek') {
			lastname = prompt('Введите фамилию');
		}
		else {
			firstname = confirm('Прошу обновить страничку');
		}
	}
}

if(lastname=='Abylov'){
    console.log('name:'+ firstname,',','lastname:'+ lastname)
}


// let number1=+prompt('Ввести число')
// let operator1= prompt('ввести оператора')
// let number2=+prompt('ввести 2-ое число')
// if(operator1=='+'){
//   console.log(number1 +number2);
// }