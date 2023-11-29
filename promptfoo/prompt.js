const systemMessage = require('./system-message')

module.exports = async function ({ vars }) {
  return [
    {
      role: 'system',
      content: systemMessage,
    },
    {
      role: 'user',
      content: `Generate me image of ${vars.target}.`,
    },
  ]
}
