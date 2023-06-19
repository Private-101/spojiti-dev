const readline = require('readline');
const fs = require('fs/promises');
const path = require('path');
const process = require('process');

const cwd = process.cwd();
const TEMPLATE_DIRECTORY = path.join(cwd, 'scripts', 'templates');
const STATELESS_COMPONENT_TEMPLATE = path.join(TEMPLATE_DIRECTORY, 'Component.tsx');
const FUNCTIONAL_COMPONENT_TEMPLATE = path.join(TEMPLATE_DIRECTORY, 'Component-FC.tsx');
const ROUTE_TEMPLATE = path.join(TEMPLATE_DIRECTORY, 'route.template.tsx');

/*
This script asks the user to enter the type of the file (component, route, service, utility, or hook) and the name of the file, and creates a new file with the specified name in the directory associated with the chosen type.

Please note that this script assumes that the directories mentioned in the DIRECTORIES object exist. If they don't, you need to either create them manually or add code to the script to create them. Also, remember to adjust the paths and templates according to your needs.
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});





const SERVICE_TEMPLATE = `export default function service() {
  // service function body
}
`;

const UTILITY_TEMPLATE = `export function utility() {
  // utility function body
}
`;

const HOOK_TEMPLATE = `import { useState } from 'react';

export default function useCustomHook() {
  const [state, setState] = useState(null);

  // Hook logic here

  return state;
}
`;

/*
const TEMPLATES = {
  component: COMPONENT_TEMPLATE,
  route: ROUTE_TEMPLATE,
  service: SERVICE_TEMPLATE,
  utility: UTILITY_TEMPLATE,
  hook: HOOK_TEMPLATE
};

const DIRECTORIES = {
  component: './src/components/',
  route: './src/routes/',
  service: './src/services/',
  utility: './src/utils/',
  hook: './src/hooks/',
};

function askQuestion(query) {
  return new Promise((resolve) =>
    rl.question(query, (answer) => resolve(answer.trim()))
  );
}

async function createFile(type, name) {
  const directoryPath = DIRECTORIES[type];
  const template = TEMPLATES[type];

  if (!directoryPath || !template) {
    console.error(`Invalid type: ${type}`);
    process.exit(1);
  }

  // The fs.mkdirSync(directoryPath, { recursive: true }) call creates 
  // the directories recursively if they don't already exist. 
  // So, if a subdirectory of a directory does not exist, it will be created as well.
  // With this script, the specified directory will be created if it doesn't already exist when you try to create a file. It will also print a message to the console when a directory is created.

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log(`Directory '${directoryPath}' created.`);
  }

  fs.writeFileSync(`${directoryPath}/${name}.js`, template);

  console.log(`Successfully created ${type} '${name}'`);
}

async function run() {
  console.log(
    'What do you want to generate? \n 1. component \n 2. route \n 3. service \n 4. utility \n 5. hook'
  );
  const typeAnswer = await askQuestion('Enter your choice: ');
  const name = await askQuestion('Enter the name: ');

  let type;
  switch (typeAnswer) {
    case '1':
      type = 'component';
      break;
    case '2':
      type = 'route';
      break;
    case '3':
      type = 'service';
      break;
    case '4':
      type = 'utility';
      break;
    case '5':
      type = 'hook';
      break;
    default:
      console.log('Invalid choice');
      rl.close();
      return;
  }

  createFile(type, name);
  rl.close();
}

run();
*/