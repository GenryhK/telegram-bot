const moment = require('moment');

let task = {
    title: '',
    time: '',
};

module.exports.startTime = (ctx) => {
    if (task.title.length > 0) {
        task.time = +moment();
    } else {
        ctx.reply('at first you need add task title send massage: /addTask TASK_NAME')
    }
};

module.exports.stopTime = (ctx) => {
    if(!task.time) {
        return
    }
    let finishTime = +new Date() - task.time;
    ctx.reply(`${task.title}: ${moment(task.time).format('DD.MM.YYYY HH:mm')} - ${moment().format('DD.MM.YYYY HH:mm')} you spend: ${moment((finishTime - 7200000)).format('HH:mm:ss')}`)
};

module.exports.getTimeSpend = (ctx) => {
    if(!task.time) {
        return
    }
    let finishTime = +new Date() - task.time;
    ctx.reply(moment((finishTime - 7200000)).format('HH:mm:ss'))
};

module.exports.addTask = (ctx) => {
    let taskName = ctx.update.message.text.replace('/addTask', '');
    if (taskName.length === 0) {
        ctx.reply(`you don't add task please send /addTask then space then TASK_NAME`)
    } else {
        task.title = taskName
    }
};
