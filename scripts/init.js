/*
To automate the process of pushing your local project to a new repository using a script, you can create a Node.js script that utilizes the execSync function from the child_process module. Here's an example script, script.js, that implements the outlined steps:

Now, when you run the updated script with the node command, it will prompt you to enter the required information interactively. After providing the necessary details, the script will execute the steps accordingly.

Please note that the script assumes valid user input and doesn't include error handling for incorrect input. You may consider adding validation or error handling logic based on your specific requirements.
*/
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const repoUrl = process.env.REPO_URL;
// const commitMsg = process.env.COMMIT_MESSAGE;
// const bName = process.env.PRIMARY_BRANCH_NAME;

// if (!repoUrl)

rl.question('Enter the URL of the new repository: ', (repositoryUrl) => {
  rl.question('Enter the commit message: ', (commitMessage) => {
    rl.question('Enter the branch name to push (e.g., main, master): ', (branchName) => {
      rl.close();

      try {
        // Step 2: Initialize a new Git repository
        execSync('git init');

        // Step 3: Add files to the staging area
        execSync('git add .');

        // Step 4: Commit the changes
        execSync(`git commit -m "${commitMessage}"`);

        // Step 5: Add the new repository as a remote
        execSync(`git remote add origin ${repositoryUrl}`);

        // Step 7: Push the commits to the new repository
        execSync(`git push -u origin ${branchName}`);

        console.log('Successfully pushed the project to the new repository.');
      } catch (error) {
        console.error('An error occurred while pushing the project to the new repository:', error.message);
      }
    });
  });
});



