import * as dotenv from 'dotenv'
import { Telegraf } from 'telegraf'

dotenv.config()

if (!process.env.TELEGRAM_TOKEN) throw new Error('Пустой API токен. Создание бота невозможно.')

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.start((ctx) => {
    ctx.reply('Это бот для заказа натурального хлеба')
})
bot.help((ctx) => {
    ctx.reply('Используйте этого бота для заказа вкусного хлеба')
})

bot.launch()
