#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const pkgJson = require('./package.json');
const file = require('./lib/file');
const resizer = require('./lib/resizer');

argv = require('yargs')
.usage('Usage: $0 <command> [options]')
.command('webimgo', 'Batch width resize and optimise images')
.example('$0 optimg -w 500', 'Resize images width to 500px and optimise')
.alias('w', 'width')
.nargs('w', 1)
.describe('w', 'Provide resize width in pixels')
.number('width')
.help('h')
.alias('h', 'help')
.argv


clear();

console.log(
  chalk.white(
    figlet.textSync('WebIMGo', { horizontalLayout: 'full' })
  )
);

console.log('\nVersion: ' + pkgJson.version + '\n');

const run = async () => {
  
  file.scanDir(process.cwd(),/\.(jpe?g|png)$/);
  
  if (file.imageFiles.length !=0){
      if (argv.width && Number.isInteger(argv.width) && argv.width > 0){
        resizer.doResizeAndOptimise(file.imageFiles, argv.width);    
      }
      else if (argv.width == null){
        resizer.runOptimisationOnly(file.imageFiles);
      }
      else{
        console.log(chalk.yellowBright('Width provided is not a positive integer!'))
      }
  }
  else {
      console.log(chalk.yellowBright('No JPG/PNG files found!'))
  }
}

run();
