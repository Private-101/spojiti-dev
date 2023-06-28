const fs = require('fs');
const glob = require('glob');

const interfacesRegex = /export\s+interface\s+[\w+\s,\[\]]+\{[^}]+\}/g;
const cwd = process.cwd();
// TODO: testDir is for testing. once approved, this should point to the app directory
const testDir = `${cwd}/test`;
const typesFilePath = `${testDir}/types.ts`;

// const srcDir = `${cwd}/app`;
// const typesFilePath = `${srcDir}/types.ts`;

/* function matchify(contents, file) {
  const interfaces = contents.match(interfacesRegex);

  if (interfaces) {
    const updatedContents = contents.replace(interfacesRegex, '');

    fs.writeFile(file, updatedContents, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Interfaces removed from ${file}`);
    });

    fs.appendFile(typesFilePath, `${interfaces.join('\n')}\n`, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Interfaces appended to ${typesFilePath}`);
    });

    // Write the import statement
    const importStatement = `import { ${interfaces.map(i => i.split(' ')[2]).join(', ')} } from '../types';\n`;

    fs.writeFile(file, importStatement + updatedContents, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Import statement added to ${file}`);
    });
  }
} */


function main() {
  globify(testDir + '/**/*.{ts,tsx}');
};

main();

function globify(pattern) {
  glob(pattern, (err, files) => {
    if (err) throw err;
    // searchFiles(files);
    files.forEach((file) => {
      fs.readFile(file, 'utf8', (err, contents) => {
        if (err) throw err;
        // matchify(contents, file);
        const interfaces = contents.match(interfacesRegex);

  if (interfaces) {
    const updatedContents = contents.replace(interfacesRegex, '');

    fs.writeFile(file, updatedContents, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Interfaces removed from ${file}`);
    });

    fs.appendFile(typesFilePath, `${interfaces.join('\n')}\n`, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Interfaces appended to ${typesFilePath}`);
    });

    // Write the import statement
    const importStatement = `import { ${interfaces.map(i => i.split(' ')[2]).join(', ')} } from '../types';\n`;

    fs.writeFile(file, importStatement + updatedContents, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Import statement added to ${file}`);
    });
  }
      });
    });
  });
}

/* function searchFiles(files) {
  files.forEach((file) => {
    fs.readFile(file, 'utf8', (err, contents) => {
      if (err) throw err;
      matchify(contents, file);
    });
  });
}; */

