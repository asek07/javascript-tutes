const doChore = (chore, callback) => {
  setTimeout(() => {
    console.log("I need to " + chore);
  }, 1000)

  //making the callback optional.
  typeof callback === 'function' && callback();
}

//Run the doChore function, wait for it to execute, then run the callback
doChore("fix bed", () => {
  console.log("chores done!")
})

doChore("fold clothes.");

const betterChore = (chore) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(typeof chore === 'string') {
        if(chore == null || chore === "") {
          rej(Error("Need to specify a chore."));
        } else {
          res("I have to " + chore);
        }
      } else {
        rej(Error("Chore needs to be a string."))
      }
    }, 2000)
  })
}

const doTasks = async (task) => {
  let chore = await betterChore(task);
  return chore;
}

doTasks(45)
  .then(item => {
    console.log(item);
  })
  .then(() => {
    console.log("We are done here!")
  })
  .catch(err => {
    console.log(err.message);
  })
