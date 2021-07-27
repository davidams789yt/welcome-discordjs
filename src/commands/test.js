exports.run = function(client, args, message){
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No tienes permisos!")
  client.emit('guildMemberAdd', message.member)
  client.emit('guildMemberRemove', message.member)
}