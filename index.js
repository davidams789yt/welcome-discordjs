const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./data/configs/config.json')
const prefix = config.prefix
const fs = require('fs')

client.on('ready', () =>{
  console.log("El bot esta listo! :D")
})

///////EVENTOS////////

client.on('message', async message =>{
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  try{
    const commandFile = require(`./src/commands/${command}`)
    commandFile.run(client, args, message);
  }catch(e){
    if(e) console.log(e)
  }
})

client.on('guildMemberAdd', async member =>{
  const embed = new Discord.MessageEmbed()
  .setTitle('WELCOME')
  .setDescription(`Hola **${member}**, bienvenido a **${member.guild}**! Espero que te la pases genial, no te olvides de leer las reglas para evitar ciertas sanciones`)
  .setImage('https://logos.flamingtext.com/Name-Logos/Welcome-design-sketch-name.png')
  .setColor('GREEN')
  .setTimestamp()

  client.channels.cache.get('ID DEL CANAL BIENVENIDAS').send(embed)
})

client.on('guildMemberRemove', async member =>{
  const embed = new Discord.MessageEmbed()
  .setTitle('BYE')
  .setDescription(`Hasta luego **${member.user.username}**! Espero volverte a ver`)
  .setImage('https://thumbs.dreamstime.com/b/se%C3%B1al-de-ne%C3%B3n-adi%C3%B3s-en-marco-la-burbuja-del-discurso-fondo-oscuro-bandera-ligera-el-pared-151416182.jpg')
  .setColor('RED')
  .setTimestamp()

  client.channels.cache.get('ID DEL CANAL DESPEDIDAS').send(embed)
})


client.login(config.token)