// New Promise methods
  const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('delayed success!');
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('error: delayed exception!'));
      }, 500);
    });
  };
  
  // Call the promises and handle results
  resolvedPromise()
    .then(result => console.log(result)) // Output: delayed success!
    .catch(error => console.error(error));
  
  rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Output: Error: error: delayed exception!
  