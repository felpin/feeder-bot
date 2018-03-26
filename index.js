require('dotenv').config();
const Discord = require('discord.js');

const { presenceUpdate, messageDelete } = require('./eventHandlers');

const client = new Discord.Client();

const token = process.env.TOKEN;

client.on('presenceUpdate', presenceUpdate);
client.on('messageDelete', messageDelete);

client.login(token);
