const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Replies with a joke.'),
	async execute(interaction) {
		await interaction.deferReply();
		axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
			.then(res => interaction.editReply(JSON.stringify(res.data.joke)))
			.catch(err => console.error(err));
	},
};
