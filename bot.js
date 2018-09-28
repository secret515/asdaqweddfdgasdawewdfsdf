const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
 if(message.content.startsWith(! + "تعال")) {
message.member.voiceChannel.join();
}
});

==============================
client.on('message', msg => {

    if (msg.content == '1join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("ايدي الروم").join();
    });
