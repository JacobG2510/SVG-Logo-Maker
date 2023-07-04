const fs = require('fs');

// Function to write content to a file
function writeFile(filename, content) {
  fs.writeFileSync(filename, content);
}

module.exports = { writeFile };