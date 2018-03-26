module.exports = (message) => {
  const channel = message.guild.systemChannel;

  channel.send(`Tentaram apagar uma mensagem é? por acaso o ${message.author} disse que: ${message}`,{
    tts: true
  })
}

