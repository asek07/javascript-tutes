// const getAfter2Seconds = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(Error("Rejected!!"));
//   }, 2000)
// })
//
// getAfter2Seconds.then(val => {
//   console.log("value is: " + val);
// }).catch(err => { console.log(err)})


//Using parameters in promise
const testNumber = number => {
  return new Promise((res, rej) => {
    if(number > 10) {
      res("Number is: " + number);
    } else {
      rej(Error("Number must be greater than 10."));
    }
  })
}

//This will resolve
testNumber(15)
  .then(outcome => {
    //console.log(outcome);
    return outcome;
  })
  .then(result => {
    console.log("Logging outcome = " + result);
  })
  .catch(err => {
    console.log(err)
  });

// //This will reject
// testNumber(5)
//   .then(outcome => {
//     console.log(outcome);
//   })
//   .catch(err => {
//     console.log(err)
//   });
