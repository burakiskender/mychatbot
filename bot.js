const botBuilder = require('claudia-bot-builder')
const botFlow = require('./lib/bot-flow')

const api = botBuilder(botFlow, {
  platforms: ['facebook']
})

api.addPostDeployConfig('apiAiToken', 'Api.ai token:', 'configure-bot')

module.exports = api
