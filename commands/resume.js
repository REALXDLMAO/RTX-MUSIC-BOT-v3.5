const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "resume",
  description: "Resume paused music.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({ content: 'Queue is empty.', ephemeral: true });
      }

      if (!queue.paused) {
        return interaction.reply({ content: 'No paused music.', ephemeral: true });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor('#7645fe')
        .setAuthor({
          name: 'Song Resumed',
          iconURL: 'https://cdn.discordapp.com/attachments/738717131155308585/1169611570234523761/IMG_7353.gif?ex=65c4c6a8&is=65b251a8&hm=f0ffcfdf21d5f9e4e60d66e0fa9344784ed5250f80d811a846444dca59824608&',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
        .setDescription(success ? '**Music is now replaying.**' : 'Error: Unable to resume song')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
