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

// var arr = ['apple', 'orang', 'pear'];
// arr.forEach(function(item,i,arr) {
// 	console.log (i + ':' + item + '(massiv :' + arr+')')
// });

// var arrf = [1,9,5,-3,7,8];
// var positivNum = arrf.filter(function(number){
// 	return number> 0;
// });
// console.log(positivNum);

// var arrf1 = [1,-3,3,6,-6,4];
// function isPositiv(number){
// 	return number > 0
// }
// console.log(arrf1.every(isPositiv));
// console.log(arrf1.some(isPositiv));

// var names = ['html', 'css', 'javascript'];
// var nameLength = names.map(function(names){
// 	return names.length;
// });
// console.log(nameLength)


// let logo = document.querySelectorAll('.logo_icon_1')
// let atribut=document.querySelector('.sweat')

// logo.forEach(function(logo){
//     logo.addEventListener('click',function(){
        
//        alert(atribut.innerText)
//     })
// })


// let sweat = document.querySelectorAll('.sweat');
//  for (let attribute of sweat){
//     console.log(attribute.innerText);
// }


// let elements = document.getElementsByClassName('logo_icon_1');
// let myFunction=function(){
//     let attribute = this.parentNode.parentNode.querySelectorAll('.sweat');
//     console.log(attribute[0].innerText);
// };
// for (let i = 0; i<elements.length; i ++){
//     elements[i].addEventListener('click',myFunction);
// }





// function name_fun(num,pet){
//     let fun = 10;
//     let result;
//     result = fun + num+pet
//     console.log(result);
// }'
// name_fun(20,10);

// let text = 'Privet kak dela';
// console.log(text.indexOf('dela'));
// console.log(text.lastIndexOf('kak'));
// console.log(text.search('dela'));
// console.log(text.slice(7,11));
// console.log(text.replace('dela', 'horosho'));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// let text1 = '    Privet kak dela   '
// console.log(text1.trim());

// let x =2.335323;;
// console.log(x.toFixed(0));
// console.log(x.toExponential(1));

// function two (number1,number2){
//     let result;
//     result = number1+ number2;
//     console.log(result.toFixed(0))
// }
// two(1.2,1.2);

// function two1 (num1,num2){
//     let result1;
//     result1 = num1+num2;
//     console.log(result1.toFixed(0))
// }
// two1(2.5,3.2);




let addcart = document.getElementsByClassName('logo_icon_1');
// console.log(addcart);
let myFunction = function(evt){
    evt.preventDefault();
    let title = this.parentNode.parentNode.querySelectorAll('.sweat');
    let price = this.parentNode.parentNode.querySelectorAll('.price');
    let image = this.parentNode.parentNode.querySelectorAll('.item_img img');

    let create_li = document.createElement('li');

    console.log(image[0]);
    console.log(title[0].innerText);
    console.log(price[0].innerText);

    create_li.innerHTML = '<div class="item_img">\
                            <a href ="?search=#">\
                              <img src="'+image[0].src +'" alt="">\
                            </a>\
                        </div>\
                            <div class="bag_info">\
                                <p class="info_title">'+title[0].innerText+'</p>\
                                <div class="info_price">\
                                   <span>'+price[0].innerText+'</span>\
                                </div>\
                            </div>';
                       

                            
                            
                           

    let block_cart = document.querySelector('.bag_order_dropdown ul')
    block_cart.appendChild(create_li);
    // alert('Товар успешно добавлен в корзину')
};

for (let i = 0; i<addcart.length; i ++){
    addcart[i].addEventListener('click',myFunction);
};