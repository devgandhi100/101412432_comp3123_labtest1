const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {

      if (!Array.isArray(mixedArray)) {
        return reject(new Error('Input must be an array'));
      }
  
      const result = mixedArray
        .filter(item => typeof item === 'string')
        .map(item => item.toLowerCase()); 
  
      resolve(result);
    });
  };
  
  // Example:
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
  