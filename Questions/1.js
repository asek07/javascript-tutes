//Fibonacci 
const fibList = n => {
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
    console.log(arr);
    return arr;
}

const fibIndex = n => {
    let foundIndex = fibList(n);
    console.log(foundIndex[n-1]);

    return foundIndex[n-1];
}

//Run functions
fibList(10);
fibIndex(5);