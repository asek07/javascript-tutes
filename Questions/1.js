//Fibonacci 
const fib = n => {
    let arr = new Array();
 
    for(i=0; i <= n; i++) {
       let fibNo;

        if(i === 0) {
            fibNo = i+1;
            arr.push(fibNo);
        }
        else if(i === 1) {
            fibNo = arr[i-1] + 1;
            arr.push(fibNo);
        } else {
            fibNo = arr[i-1] + arr[i-2];
            arr.push(fibNo);
        }
    }
    console.log(arr)
}

fib(10);