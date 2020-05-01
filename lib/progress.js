const progress = require('cli-progress');
const ansiEscapes = require('ansi-escapes');
const write       = process.stdout.write.bind(process.stdout);
const _colors = require('colors');

const pBar = new progress.SingleBar({
    format: 'Optimisation |' + _colors.green('{bar}') + '| {percentage}% completed | {value}/{total} files optimised',
}, progress.Presets.shades_classic);


module.exports = {
    start: (total, start, cursorX, cursorY) => {
        pBar.start(total, start);
        write(ansiEscapes.cursorTo(cursorX, cursorY));
    },
    updateAt: (toCursorX, toCursorY) => {
        write(ansiEscapes.cursorSavePosition + ansiEscapes.cursorTo(toCursorX, toCursorY));
        pBar.increment();
        write(ansiEscapes.cursorRestorePosition);
    },
    stop: () => {
        pBar.stop();
    }
}