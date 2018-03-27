module.exports = (message) => {
  const channel = message.guild.systemChannel;

  channel.send(`Tentaram apagar uma mensagem é? o ${message.author} disse: ${message}`,{
    tts: true
  })
}

