// let navigationActiveLinks=document.getElementById('navigation-js');
// let burgerActive=document.getElementById('burger-js');

// burgerActive=addEventListener('click', function() {
//     navigationActiveLinks.classList.toggle('nav-active');

// })

// function new01 (x,y) {
//     return (x+y);
// }

// let result = new01(5,10);
// console.log(result);

// function new02(x,y,z){
//     return (x+y*z);
// }

// let result2 = new02(4,2,3);
// console.log(result2);

// function new3(number){
//     if (number == 5){
//         return 'hi'
//     } else if (number ==7) {
//         return 'hey'
//     } return 'error'
        
// }

// // let result3 = new3(8);
// // console.log(result3);
// console.log(new3(5));

// function sum (...arguments) {
//     let numsum = 0;
//     for (let item of arguments) {
//         numsum=numsum+item;
//     }
//      return numsum;
// }

// let result = sum(5, 4, 2, 78, 54, 63, 31);
// // დაჯამება რიცხვების

// console.log(result);

// let y = 50;

// function garepunkcia(x){
//     // let y=100;
//     function shidapunkcia(){
//         // let y=200;
//         return x+x+y;
//     }
//     return shidapunkcia;
// }

// let i1 = garepunkcia(10)
// let result = i1();

// console.log(result);
// let y = 'book';

// let books = 'new';
// let pens = 'world';

// console.log(books+pens);

// function outside(x){
//     let y = 30;
//     function inside(){
//         return x+x+y;
//     }
//     return inside;
// }

// let i1 = outside(3);
// let result = i1();
// console.log(y);

// function axalifunkcia(){
//     let fruit = 'apple';

//     function displayfruit(){
//         let fruit = 'orange'; 
//         console.log(fruit);
//     }
//     return displayfruit;
// }

// let result = axalifunkcia();
// result();

// function displayfruit(){
//     let fruit = 'apple';
//     console.log(fruit);
// }

// displayfruit();

// if (true) {
//     let x=10;
//     console.log(x);
// }

// let array = [5,4,2,3,7];
// array.forEach(function(item){
//     console.log(item);
// });

// array.forEach(item => console.log(item)); 

let array = ['html', 'css', 'javascrip', 'bootsrap'];
// for (let x=0; x<array.length; x++){
//     if (array[x].length >4){
//         console.log(array[x]);
//     }
// }

// for(item of array) {
//     if (item.length > 4){
//         console.log(item);
//     }
// }

// array.forEach(function(y){
//     if(y.length >4){
//         console.log(y);
//     }
// })

// array.forEach(y => {
//     if(y.length >4){
//         console.log(y);
//     }
// });

function requestToServer() {
    let newRequest = new  XMLHttpRequest();

   function renderi (){
     let getRespons = this.responseText;
     let finalrespons = JSON.parse(getRespons);

     let ul = document.createElement('ul');
     let li = document.createElement ('li');
    li.textContent = finalrespons.data[1].email;
    ul.appendChild(li);
    document.getElementById('div-wrapper').appendChild(ul);
   }
   newRequest.addEventListener('load', renderi);
   newRequest.open('GET','https://reqres.in/api/users?page=2');
   newRequest.send();
}

requestToServer();