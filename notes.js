/**
 * To hide the private or important details we use environment variables 
 * to setup environment variables we have a package in node called dotenv
 * this helps in setting up Environment variables
 * 
 * To avoid writing everything in index.js we used serverConfig.js to take details from 
 * env with the help of process Global 
 * process.env.(Variable_Name) -->This is used to access
 * This is then exported and and imported in index.js 
 * 
 * once you have added your DB config , go to src folder from your terminal and execute 
 * 'npx sequelize db:create'and then execute
 * If you want to change from files to have consistency change from both 
 * migrations and table.js file 
 * 
 * 
 */