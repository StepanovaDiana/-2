

const TelegramBot = require('node-telegram-bot-api');
const {startOptions, againOptions} = require('./options')
const token = "6720187351:AAEI3-sYwgQeLqMKHL0lXekc4Fr5KzTIiLI";

const b= new TelegramBot(token,{polling : true})


const againStart = async ( chatId ) => {
    await  b.sendMessage(chatId, `Добро пожаловать! Чтобы продолжить, нажмите на кнопку "Обращение"`, startOptions)
}
const start = () => {
    b.setMyCommands([
        {command: '/start', description: 'Начальное приветсвие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
    ])
    b.on('message', async msg=>{
        const text =msg.text;
        const chatId=msg.chat.id;

        if(text=='/start') {
            return againStart(chatId);
        }
        if(text ==='/info'){
            return  b.sendMessage(chatId, `Вас зовут ${msg.from.first_name}`)
        }
        return b.sendMessage(chatId, 'Такую команду я не понимаю, попробуй еще раз!')
    })

    b.on( 'callback_query',  async msg => {
        const data =msg.data;
        const  chatId=msg.message.chat.id;
        if(data==="/again") {
            return againStart(chatId);
        }
        return b.sendMessage(chatId,`Ты выбрал ${data}`, againOptions)


    })

}

start()