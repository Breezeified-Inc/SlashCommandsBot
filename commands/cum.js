const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cum')
		.setDescription('yes'),
	async execute(interaction) {
		await interaction.reply('Cum!Cum!Cum!Cum!Cum!Cum!Cum!Cum!');
	},
};
