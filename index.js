const { Plugin } = require('powercord/entities')

module.exports = class BubbleWrap extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'bwrap',
      description: 'Turns your message into bubble wrap',
      usage: '{c} [text]',
      
      executor: function (args) {
        if (args.length < 1) return

        const message = args.join(' ')
        let resultingMessage = ''

        for (const letter of message) {
          resultingMessage += `||${letter}||`
        }

        return { send: true, result: resultingMessage }
      }
    })
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('bwrap')
  }
}