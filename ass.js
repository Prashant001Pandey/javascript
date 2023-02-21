var x = 10;
function foo()
{ 
    var x = 20; console.log(x);

} ;

console.log(x); 

function bar()
{ 
    x = 30; console.log(x); 
}
foo();
bar();
console.log(x);