function stretch() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(), console.log("done stretching"), 1000)
  // })

  const newP = new Promise((res, rej) => {
    setTimeout(() => {
      return res("done stretching");
    }, 1000);
  });
  return newP;
}

function runOnTreadmill() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(), console.log("done running on treadmill"), 500)
  // })

  const newP = new Promise((res, rej) => {
    setTimeout(() => {
      return res("done runnning on treadmill");
    }, 500);
  });
  return newP;
}

function liftWeights() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(), console.log("done lifting weights"), 2000)
  // })

  const newP = new Promise((res, rej) => {
    setTimeout(() => {
      return res("done lifting weights");
    }, 2000);
  });
  return newP;
}

function workout() {
//   stretch();
//   runOnTreadmill();
//   liftWeights();
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), console.log("done working out"), 2500)
//   })

  //   const newP = stretch();
  //   newP
  //     .then((res) => console.log(res))
  //     .then(() => runOnTreadmill())
  //     .then((res) => console.log(res))
  //     .then(() => liftWeights())
  //     .then((res) => console.log(res))
  //     .then(() => console.log("done working out"));
  // }

  stretch().then((res) => {
    console.log(res);
    return runOnTreadmill();
  }).then((res) => {
    console.log(res);
    return liftWeights();
  }).then((res) => {
    console.log(res);
    console.log("done working out")
  })
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out