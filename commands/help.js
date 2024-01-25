/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Retrieve details about the bot and available commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: 'Play', value: 'Stream a song from a given link or text from sources' },
          { name: 'Stop', value: 'Makes the bot stop playing music and leave the voice' },
          { name: 'Queue', value: 'View and manage the song queue of this server' },
          { name: 'Skip', value: 'Skip the current playing song' },
          { name: 'Pause', value: 'Pause the currently playing song' },
          { name: 'Resume', value: 'Resume the current paused song' },
          { name: 'Loop', value: 'Toggle loop mode for queue and current song' },
          { name: 'Autoplay', value: 'Enable or disable autoplay [play random songs ]' },
          { name: 'Seek', value: 'Seek to a specific time in the current song' },
          { name: 'Previous', value: 'Play the previous song in the queue' },
          { name: 'Shuffle', value: 'Shuffle the songs in queue' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/738717131155308585/1169611570234523761/IMG_7353.gif?ex=65c4c6a8&is=65b251a8&hm=f0ffcfdf21d5f9e4e60d66e0fa9344784ed5250f80d811a846444dca59824608&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: 'Ping', value: "Check the bot's latency" },
          { name: 'Clear', value: 'Clear the song queue of this server' },
          { name: 'Time', value: 'Display the current song playback time' },
          { name: 'Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: 'Now Playing', value: 'Display the currently playing song information' },
          { name: 'Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/738717131155308585/1169611570234523761/IMG_7353.gif?ex=65c4c6a8&is=65b251a8&hm=f0ffcfdf21d5f9e4e60d66e0fa9344784ed5250f80d811a846444dca59824608&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/@IMR_Clan')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/7Kbf69DmQm')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Roblox Group (Coming Soon)')
        .setURL('https://www.roblox.com/search/groups')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
