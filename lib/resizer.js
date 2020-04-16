const sharp = require('sharp');
const path = require('path');
const Spinner = require('cli-spinner').Spinner;
const chalk = require('chalk');
const fs = require('fs');
const sizeOf = require('image-size');

const optimiser = require('./optimiser');


module.exports = {
    doResizeAndOptimise: async (files, width) => {

        var spinner = new Spinner({
            text: 'Resizing & Optimising images... %s',
            stream: process.stderr,
            onTick: function(msg){
                this.clearLine(this.stream);
                this.stream.write(msg);
            }
        })
        spinner.setSpinnerString('|/-\\');
        spinner.start();

        const format = (num, decimals) => num.toLocaleString('en-US', {
            minimumFractionDigits: 0,      
            maximumFractionDigits: 2,
         });

        sharp.cache(false)

        for (const file of files){
            const fileDimension = sizeOf(file)
            if (fileDimension.width > width) {
                await sharp(file)
                .resize({ width: width })
                .toBuffer(function(err, buffer) {
                    fs.writeFile(file, buffer, async function(e) {
                        var pfileStats = fs.statSync(file)
                        var relPath = file.split(path.basename(process.cwd())).pop()
                        const optimisedFile = await optimiser.runOptimisation(file)
                        if (optimisedFile) {
                            var fileStats = fs.statSync(optimisedFile)
                            var percent = format(100 - (fileStats['size'] * 100/pfileStats['size']))
                            console.log(chalk.green('\nResized & Optimised: ') + chalk.blueBright(path.basename(process.cwd()) + relPath) + chalk.green(' -----> Savings of ' + percent + '%'))
                        }
                    });
                    if (err){
                        console.log('Error: ' + err);
                    }
                });
            }
            
        }
        spinner.stop(true);
        
    },
    runOptimisationOnly: async (files) => {
        var spinner = new Spinner({
            text: 'Optimising image... %s',
            stream: process.stderr,
            onTick: function(msg){
                this.clearLine(this.stream)
                this.stream.write(msg)
            }
        })
        spinner.setSpinnerString('|/-\\');
        spinner.start();

        const format = (num, decimals) => num.toLocaleString('en-US', {
            minimumFractionDigits: 0,      
            maximumFractionDigits: 2,
         });

        for (const file of files){
            var pfileStats = fs.statSync(file)
            var relPath = file.split(path.basename(process.cwd())).pop()
            const optimisedFile = await optimiser.runOptimisation(file)
            if (optimisedFile) {
                var fileStats = fs.statSync(optimisedFile)
                var percent = format(100 - (fileStats['size'] * 100/pfileStats['size']))
                console.log(chalk.green('\nImage optimised: ') + chalk.blueBright(path.basename(process.cwd()) + relPath) + chalk.green(' -----> Savings of ' + percent + '%'))
            }
            
        }
        spinner.stop(true)
    }
}