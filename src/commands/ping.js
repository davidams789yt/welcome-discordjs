exports.run = function(client, args, message){
  message.channel.send(`Tu ping es de **${Date.now() - message.createdTimestamp}** ms`)
}