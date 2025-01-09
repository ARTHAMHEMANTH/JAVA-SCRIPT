// function isPalindrome(str)
// {
//     let revStr = "";
//     for(let i = str.length-1;i>=0;i--){
//         console.log(str[i]);
//         revStr += str[i];

//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a palindrome");
//     }
// }

// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("telugu");

// function onemoretime(){
//     console.log("not understood")
// }

//anynmous function:
 // !function expression:
 
//  let x = function(){
//     console.log("hello");
//  }
//  console.log(x);
// (
// function(){
//     console.log("hello world");
//  }
// )
// ();

// ARROW FUNCTION

// function demo(){
//    console.log("hello");
// }
// demo();

// let x =_=>{console.log("hello")};
// x();

// let y =_=> {console.log("hi")};
//            {console.log("bye")};
//            {console.log("ok")};
// x();

// // return statement explicit:
// function add(a,b){
//     return a+b;
// }
//!return -implicit return,explicit return
function add(a,b){
    console.log("i am  printing before return keyword");
    return a+b;//explicit return,return is an end of a statement
    console.log("i am  printing after return keyword")
}
let x = add(4,5);
console.log(x);