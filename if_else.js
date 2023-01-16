let a = prompt("whats your name ..!!") ; // use for asking
a = Number.parseInt(a)  // converting the string to a number (typecasting)
if(a>0){
    alert("this is a valid age"); // true run if condition OR false run else condition
}
else{
    alert("this is an invalid age"); 
}
console.log(typeof a)