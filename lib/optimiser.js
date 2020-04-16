const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const Spinner = require('cli-spinner').Spinner;
const chalk = require('chalk');
const path = require('path');

module.exports = {
    runOptimisation: async (file) => {
        const dest = path.dirname(file);
        const optimisedFile = await imagemin(
            [file],
            {
                destination: dest,
                plugins: [
                    imageminMozjpeg({quality: 40}),
                    imageminPngquant({quality: [0.4, 0.6]}, {strip: true})
                ]
            }
        ).catch((err) => console.log('Error: ' + err));
        if (optimisedFile[0].destinationPath){
            return file;
        }
        else {
            return null;
        }
        
    }
}