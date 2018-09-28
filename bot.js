

const swearWords = ["كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة", "كلمة"]; 
  if( swearWords.some(word => message.content.includes(word)) ) {
    message.reply("مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ").then(sentMessage =>{
      sentMessage.delete(20000)
    })
    message.delete(3000)
    client.channels.get('').send(message.author.toString() + "استخدم كلام لا يليق ~")
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
