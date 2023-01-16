let a = prompt("whats your name ..!!") ; // use for asking
a = Number.parseInt(a)  // converting the string to a number (typecasting)
if(a<0){
    alert("this is a valid age"); 
}
else if (a<9){
    alert("you are a kid and you connot driving");

}
else if (a<18 && a>9){
        alert("you are a kid and you  can drive after 18 ");
}
else{
    alert("this is an invalid age"); 
}
console.log("done")
console.log("you can ",(a<18? "not drive" : "drive")) // ternary operator