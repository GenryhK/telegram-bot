const bot = require('./src/config').bot;
const welcome = require('./src/modules/welcome-module');
const timeModule = require('./src/modules/time-module');
const help = require('./src/modules/help-module');



bot.start((ctx) => {
    welcome.welcome(ctx)
});
bot.help((ctx) => {
    help.defaultCommands(ctx)
});
bot.on('sticker', (ctx) => {

});
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('startTime',(ctx) => {
    timeModule.startTime(ctx)
});

bot.command('stopTime',(ctx) => {
    timeModule.stopTime(ctx)
});
bot.command('addTask', (ctx) => {
    timeModule.addTask(ctx)
});
bot.command('timeSpend',(ctx) => {
    timeModule.getTimeSpend(ctx)
});

bot.launch();

bot.startPolling();