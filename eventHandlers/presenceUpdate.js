module.exports = (oldMember, newMember) => {
  const channel = newMember.guild.systemChannel;

  if (oldMember.presence.status === 'offline' && channel) {
    channel.send('Sinto cheiro de feeder na área. Parece que alguém logou.');
  }
}
