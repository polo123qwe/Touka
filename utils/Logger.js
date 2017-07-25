'use strict';
const chalk = require('chalk');

class Logger {
    /**
     * Logs an error
     * @param {String}  type      - The type of error, or what caused it
     * @param {String}  stack     - The stack of the error
     * @param {Date}    timestamp - The timestamp of when the error occurred
     * @param {Channel} channel   - If there's a channel specified we log the error to the channel
     */
    logError(type, stack, timestamp, channel) {
        console.log(
            timestamp.toUTCString()  + ' ' + chalk.bgRed(' ' + type.toUpperCase() + ' ') + ' > ' + stack
        );

        if (channel) {
            channel.send('There was an error on `' + channel.name + '`, with date `' + timestamp.toUTCString() + '`. Error stack:\n```' + stack + '```');
        }
    }
}

module.exports = new Logger;
