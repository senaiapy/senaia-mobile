#!/usr/bin/env node

const chalk = require('chalk');
const { runCommand, cleanUpFolder, showMoreDetails } = require('./utils.js');

const createSenaiaApp = async () => {
  // get project name from command line
  const projectName = process.argv[2];
  // check if project name is provided
  if (!projectName) {
    console.log(chalk.red('Please provide a project name'));
    process.exit(1);
  }

  // create a new project based on senaia template
  const cloneStarter = `git clone --depth=1  https://github.com/senaiapy/react-native-template-senaia.git ${projectName}`;

  // run init command and clean up project folder
  await runCommand(cloneStarter, {
    loading: 'Download and extract template',
    success: 'Template downloaded and extracted',
    error: 'Failed to download and extract template',
  });

  await cleanUpFolder(projectName);

  // install dependencies
  await runCommand(`cd ${projectName} && pnpm install`, {
    loading: 'Installing dependencies',
    success: 'Dependencies installed',
    error: 'Failed to install dependencies, Make sure you have pnpm installed',
  });

  showMoreDetails();
};

createSenaiaApp();
