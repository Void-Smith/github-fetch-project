// var btn = document.querySelector('.btn');
// var main = document.querySelector('main');

// let mode = '';
// btn.addEventListener("click",function(){
// // if(mode===1){
// //     console.log("black")
// //      main.classList.add   
// //     mode = 0;
// // }else{
// //     console.log("White");

// // mode = 1
// // }
// mode = mode + `<h2>don't cry<h2>`;
// btn.innerHTML = mode
// })

// linear search example

// const arr = [1, 2, 3, 4, 5];
// let target = Number(prompt("Enter a target value: "));
// let index = -1;
// for (i = 0; i < arr.length; i++) {
//     if (target == arr[i]) {
//         index = i
//         break;
//     }

// }
// if (index == -1) {
//     console.log("Element not found");

// } else {
//     console.log(`Element found at index ${index}`)
// }






// class Mobileshop {
//     constructor() {
//         this.brand = [];
//     }
//     addBrand(Brand){
//         this.brand.push(Brand)
//     }
// }

// class Brand{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
// }

// let brand = new Brand("Samsung", 50000);
// let add = new Mobileshop();
// add.addBrand(brand);

// console.log(Mobileshop.prototype)


// function food(name, price, rating){
//     this.name = name;
//     this.price = price;
//     this.rating = rating;
// }

// food.prototype.seeAll = function(){
//     console.log(this.name)
//  n = Math.floor(n / 10);    console.log(this.price)
//     console.log(this.rating)
// }

// let panipuri = new food('panipuri', 10, 5);
// console.log(panipuri)
// panipuri.seeAll();\

// function fibo(n){
//     if(n==0) return 0;
//     if(n==1) return 1;
//     return fibo(n-1) + fibo(n-2);
// }

// let n=10;
//  console.log(fibo(n));

// function getDetails(name, cb) {
//     setTimeout(function () {
//         console.log(" sentding the request to instagram...arguments.");
//     }, 1000)

//     setTimeout(function () {
//         console.log(" Fetching data");
//     }, 3000);

//     setTimeout(function () {
//         cb();
//     }, 5000);
// }

// getDetails("SamarpanRai", function () {

//     console.log("dat  came")
// })

// function stepOne(cb){

//     console.log("step 1");
//     cb();
// }

// function stepTwo(cb){

//     console.log("step 2");
//     cb();
// }
// function stepThree(cb){

//     console.log("step 3");
//     cb();
// }
// stepOne(()=>{
// stepTwo(()=>{

//     stepThree(()=>{

//     })
// })

// })

// const pr = new Promise(function(res, rej){
//     console.log("Instagram jaao data lao");
//     console.log("data aayo tw");
//     res();
// });

// pr.then(function(){
//     console.log("ahhh data aayo hai aayo");

// })

// pr.catch(function(){
//     console.l     og("Nai data kina ho aayena tw k vayo hola");

// })

// function orderFood(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             if(Math.random()<.7){
//             res();
//             }else{
//                 rej();
//             }
//         } ,2000 )
//     })
// }

// orderFood().then(function(){
//     console.log(" pizza delivered");

// })
// orderFood().catch(function(){
//     console.log("  delivered Failed");

// })

// function stepOne(cb) {
//     return new Promise((res, rej) => {
//         console.log("step 1");
//         res();
//     })
// }
// function stepTwo(cb) {
//     return new Promise((res, rej) => {
//         console.log("step 2");
//         res();
//     })
// } function stepThree(cb) {
//     return new Promise((res, rej) => {
//         console.log("step 3");
//         res();
//     })
// }
// stepOne().then(stepTwo)

let btn = document.querySelector('.btn')
let userinp = document.querySelector('.userinp');
console.log(userinp);

let form = document.querySelector('form');
let githubProfile = document.querySelector('.user-gitdetail')
function getUserData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((raw) => {
            if (!raw.ok) throw new Error("Payena Data🥲")
            return raw.json();
        })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})
function decorate(info) {
    let data = `
   <div class="card">
    <div class="card-img">
      <img src=${info.avatar_url}>
    </div>
    <div class="card-body">
      <h2>${info.name}</h2>
      <p class="bio">${info.bio ? info.bio : "No description.."}</p>
      <div class="stats">
        <div class="stat">
          <span>${info.public_repos}</span>
          <small>Repositories</small>
        </div>
        <div class="stat">
          <span>${info.followers}</span>
          <small>Followers</small>
        </div>
        <div class="stat">
          <span>${info.following}</span>
          <small>Following</small>
        </div>
      </div>
      </div>
  </div>
`
 githubProfile.innerHTML = data;   
    console.log(info);
}


btn.addEventListener("click", () => {

    let username = userinp.value.trim();
    getUserData(username)
        .then((data) => {
              decorate(data)
        })
  
})






