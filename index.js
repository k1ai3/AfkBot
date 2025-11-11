const mineflayer = require('mineflayer')

const SERVER_IP = 'play.hypernet.fun'
const SERVER_PORT = 25581
const BOT_NAME = 'BooterGvuu07gamer'
const AUTH_PASSWORD = 'mypassword123'

const bot = mineflayer.createBot({
  host: play.hypernet.fun,
  port: 25581,
  username: BooterGvuu07gamer,
})

bot.once('spawn', () => {
  console.log('✅ Bot joined!')
  bot.chat(`/login ${omar7777}`)
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 400)
  }, 30000)
})

bot.on('chat', (u, msg) => {
  if (msg.includes('tpa')) bot.chat('/tpaccept')
})

bot.on('end', () => {
  console.log('⚠️ Reconnecting...')
  setTimeout(() => {
    const { spawn } = require('child_process')
    spawn('node', [__filename], { stdio: 'inherit' })
  }, 10000)
})
