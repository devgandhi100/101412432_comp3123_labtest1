const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Function to create log files
const createLogFiles = () => {
  // Create the Logs directory if it doesn't exist
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log(`Created directory: ${logsDir}`);
  }

  // Change the current directory to the Logs directory
  process.chdir(logsDir);

  // Create 10 log files
  for (let i = 1; i <= 10; i++) {
    const fileName = `logfile${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(`Created file: ${fileName}`);
  }
};

// calling the function
createLogFiles();