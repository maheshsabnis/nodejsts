import fs = require("fs");

fs.writeFile("myfile.txt", "The Text File", err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("file is written successfully..");
});
