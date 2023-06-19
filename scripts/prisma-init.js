/*
  scripts/init.js
  @description - this script is run during app initialization only once
*/
const fs = require('fs');
const path = require('path');
const process = require('process');
const cp = require('child_process');


/**
 * @returns the current working directory of the Node.js process
 */
const cwd = process.cwd(); 
// prisma directory path
const prismaDirectoryPath = path.join(cwd, 'prisma');
// prisma schema file path
const schemaFilePath = path.join(prismaDirectoryPath, 'schema.prisma');
const devDbFilePath = path.join(prismaDirectoryPath, 'dev.db');

/*
It's worth noting that while fs.rmSync provides more flexibility for file and directory removal operations, 
fs.unlinkSync remains a valid and widely used method specifically for file deletion.

When choosing between fs.rmSync and fs.unlinkSync, 
consider the version of Node.js you are using and the specific requirements of your use case. 
If you are working with older versions of Node.js or need to delete only files, 
fs.unlinkSync is sufficient. However, if you are using Node.js 15.5.0 or above and require 
the ability to delete both files and directories or have more control over the deletion process, 
fs.rmSync is the recommended choice.
*/

function main() {
  console.log('checking for dev.db file...');

  if (fs.existsSync(devDbFilePath)) {
      console.log('Existing dev.db file found, deleting it now...');
      fs.unlinkSync(devDbFilePath);
      console.log('Existing dev.db file deleted successfully.');
    };
    console.log('running setup-dev to generate new database from existing prisma schema...');
    cp.exec("npm run setup-dev", (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
};

main();
