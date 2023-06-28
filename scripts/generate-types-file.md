Here's a Node.js script using fs and glob libraries that you can use to perform this task.

This script is not 100% bullet-proof, and there are some considerations that must be made:

- We're assuming that you want to remove ALL interface declarations and transfer them to a single file. This might not be ideal in a real-world situation, as interfaces could be specifically related to the code in each individual file. A better approach could be to refactor and organize your types more strategically.
- TypeScript interfaces might be complex and span multiple lines with other code nested inside. This script will only work for simple, single line interface declarations.
- TypeScript syntax for interfaces could vary and may include exported or non-exported interfaces, or interfaces that extend others. These situations might not be covered fully by this script.
- This script should be used with caution and you should back up your code before using it. 

Here's the script:

```javascript
const fs = require('fs');
const glob = require('glob');

const interfacesRegex = /export\s+interface\s+[\w+\s,\[\]]+\{[^}]+\}/g;

const rootDir = './src'; // Change this to your directory
const typesFilePath = './src/types.ts';

glob(rootDir + '/**/*.{ts,tsx}', (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    fs.readFile(file, 'utf8', (err, contents) => {
      if (err) throw err;

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
```

Before running the script, you'll need to install the required dependencies. You can do this with npm or yarn:

```shell
npm install glob
```

To run the script, you can use Node.js:

```shell
node your-script-file.js
```

Remember that this script isn't foolproof and can likely be improved upon. It's provided as a basic starting point for the task you described.