const TelegramBot = require('node-telegram-bot-api');
const token = '5043574917:AAFN-YAVUJsEhjsC-eynaJcNUqCKY0HAiRA'

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const idchat = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(idchat, resp)
});

bot.on('message', (msg) => {
    const chatid = msg.chat.id
    bot.sendMessage(chatid, 'il messaggio')
});



