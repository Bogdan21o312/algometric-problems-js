
const fs = require('fs');
const { spawnSync } = require('child_process');

// Retrieve the file number from the command line arguments
const fileNumber = process.argv[2];

// Construct the file path
const filePath = `problems/${fileNumber}.js`;

// Check if the file exists
if (fs.existsSync(filePath)) {
  // Execute the file using the "node" command
  spawnSync('node', [filePath], { stdio: 'inherit' });
} else {
  console.error(`File "${filePath}" does not exist.`);
}
