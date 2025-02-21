let promise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection
    
    if (success) {
      resolve("Task done!");
    } else {
      reject("Something went wrong.");
    }
  });
  
  promise
    .then(result => console.log(result)) // Runs if success
    .catch(error => console.log(error)); // Runs if failure