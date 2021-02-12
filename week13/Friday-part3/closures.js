
// function add(){

//     let x = 1; 
//     let y = 2;

//     function f(){

//         setTimeout(()=>{
//             console.log(x + y); 
//         }, 10000)
        
//     }

//     f();

//     console.log('add function has completed');

//     return;

// }


// add();

// console.log('outside of our function');


// let result = (function(x, y){
//     //console.log(x + y);
//     return x + y
// })(3, 4)


// console.log(result);



// let $ = (()=>{
    

//     const pi = 3.14;
//     const val = 567;

//     function multPi(multiplier){
//         return pi * multiplier
//     }
    
//     function add(x){
//         return x + val;
//     }

//     let jQuery = {
//         multiplyPi: multPi,
//         add567: add
//     };

//     return jQuery

// })();


// console.log( $.multiplyPi(5) );

// console.log($.add567(5));


const times10 = (n) =>  n * 10;

// const cache = {};

const memoTimes10 = (p) => {

    const cache = {}

    function memo(n){
        if( n in cache){
            console.log('Fetching data from cache :',n);
            return cache[n];
        }
        else{

            console.log('Calculating result');
            cache[n] = times10(n);

            return cache[n];
        }

    }

    return memo(p)

}

console.log('Calculating value of 9: ', memoTimes10(9));  //calcuated 

console.log('Cached value of 9: ', memoTimes10(9));  //cache


console.log('Calculating value of 8: ', memoTimes10(8));  //calcuated 

console.log('Cached value of 8: ', memoTimes10(8));  //cache

console.log('Calculating value of 6: ', memoTimes10(6));  //calcuated 
console.log('Calculating value of 3: ', memoTimes10(3));  //calcuated 

console.log('Cached value of 6: ', memoTimes10(8));  //cache
console.log('Cached value of 3: ', memoTimes10(3));  //cache






