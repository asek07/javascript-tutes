//Async with promises

//Promise function
const sayHi = name => {
  return new Promise((res, rej) => {
    setTimeout(() => {  //happens after 1 second
        res("Hello, " + name);
    }, 1000)
  })
}

const greetEveryone = async () => {
  //b will only start once 'a' is finished
  const a = await sayHi("Andy");
  const b = await sayHi("Joe");
  const c = await sayHi("Jim");

  let vals = [];

  vals.push(a);
  vals.push(b);
  vals.push(c);

  return vals;
}

//Call greetEveryone method, WAIT until it's complete
//use then() to get what greetEveryone() returned
//do what you need with that data
greetEveryone().then(names => {
  //greetEveryone returns an array of names
  //create a loop that renders each index
  for(i=0; i < names.length; i++) {
    console.log(names[i]);
  }
})
