module.exports = (oldMember, newMember) => {
  const channel = newMember.guild.systemChannel;

  if (oldMember.presence.status === 'offline' && channel) {
    console.log(oldMember.user)
    if (oldMember.user.username === 'JulioLP') {
      channel.send('Silêncio que o papai chegou, oi Julinho seu lindo!', {
        tts: true
      })
    } else{
      channel.send('Sinto cheiro de fíder na área. Parece que alguém logou.', {
        tts: true
      });
    }
  }
}

