'use strict';

/* Constants */
const Discord      = require('discord.js');
const Config       = require('./config.json');
const chalk        = require('chalk');
const EventHandler = require('./handlers/eventHandler.js');
const logger       = require('./utils/logger.js');

/* Discord Client */
const Client = new Discord.Client();

/* Variables */
let time = Date.now();

/**
 * Ready event
 */
Client.on("ready", () => {
    let interval = Date.now() - time;
    console.log(chalk.bgGreen(' Touka is ready. ') + '\n' +
                'It took ' + interval + 'ms to ready up.');
});

/* Load up the event handlers from a separate file so we can have this be
 * a little more organized */
EventHandler(Client);

/* Try and login as a bot user */
try {
    Client.login(Config.bot.token);
} catch (e) {
    logger.logError('login', e.stack, new Date());
}
