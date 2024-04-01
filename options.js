module.exports = {
      startOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Текст кнопки1', callback_data:'1'},{text: 'Текст кнопки2', callback_data:'2'}],
                [{text: 'Текст кнопки3', callback_data:'3'},{text: 'Текст кнопки4', callback_data:'4'}],
            ]
        })
    },
      againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Обратиться еще раз!', callback_data:'/again'}],
            ]
        })
    }
}