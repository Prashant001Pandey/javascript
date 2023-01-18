function One(a,b,callback) // function One 3 argument and function callback
{
    const result = a + b ;
    callback(result);

}
// callbackfuntion two
function two(result){

    console.log(result);
}

One(10, 20, two);