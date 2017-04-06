var fib = [1, 2]
var evenTotal = 0

while (fib[fib.length-1]<=4000000) {
    if (fib[fib.length-1]%2===0) {
    evenTotal+=fib[fib.length-1];
    console.log(evenTotal); fib[fib.length]=fib[fib.length-1]+fib[fib.length-2]} else {
        fib[fib.length]=fib[fib.length-1]+fib[fib.length-2]}}