const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Function to remove log files
const removeLogFiles = () => {
  if (fs.existsSync(logsDir)) {
    // Read the contents of the Logs directory
    const files = fs.readdirSync(logsDir);
    
    // Output file names to delete
    files.forEach(file => {
      console.log(`Deleting: ${file}`);
      fs.unlinkSync(path.join(logsDir, file)); // Delete the file
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log(`Deleted directory: ${logsDir}`);
  } else {
    console.log('Logs directory does not exist.');
  }
};

// Execute the function
removeLogFiles();