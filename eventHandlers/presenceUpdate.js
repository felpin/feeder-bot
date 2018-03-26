module.exports = (oldMember, newMember) => {
  const channel = newMember.guild.systemChannel;

  const Mensagens = [
    `Sinto cheiro de fíder na área. Parece que o ${oldMember.user.username} logou.`,
    'Chegou mais um núbi',
    `PORRA ${oldMember.user.username}, vai meo, loga meo, anda meo, aceita meo`,
    `É o Júlio? a, é o ${oldMember.user.username}, tríste`,
    'Chegou mais um pra fídar',
    `alguém chamou o ${oldMember.user.username}?, porque eu não chamei`,
    `porquê o ${oldMember.user.username} é um fíder via..., aaa, chegou o assunto`,
    `${oldMember.user.username}, esse lôco ai nem é do nosso grupo, sai fora meo`,
    `chegou mais um chorão`,
  ]

  let msg = '';
  const random = Math.random();

  if(random < 0.1){
    msg = Mensagens[0]
  }else if(random < 0.2){
    msg = Mensagens[1]
  }else if(random < 0.3){
    msg = Mensagens[2]
  }else if(random < 0.4){
    msg = Mensagens[3]
  }else if(random < 0.5){
    msg = Mensagens[4]
  }else if(random < 0.6){
    msg = Mensagens[5]
  }else if(random < 0.7){
    msg = Mensagens[6]
  }else if(random < 0.8){
    msg = Mensagens[7]
  }else if(random < 0.9){
    msg = Mensagens[8]
  }else {
    msg = Mensagens[9]
  }

  if (oldMember.presence.status === 'offline' && channel) {
    if (oldMember.user.username === 'JulioLP') {
      channel.send('Silêncio que o papai chegou, oi Julinho seu lindo!', {
        tts: true
      })
    } else{
      channel.send(msg, {
        tts: true
      });
    }
  }
}

