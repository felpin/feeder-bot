require('dotenv').config();
const Discord = require('discord.js');

const { presenceUpdate } = require('./eventHandlers');

const client = new Discord.Client();

const token = process.env.TOKEN;

client.on('presenceUpdate', presenceUpdate);

client.login(token);
