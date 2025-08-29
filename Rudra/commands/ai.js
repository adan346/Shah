const { Hercai } = require('hercai');
const herc = new Hercai();

module.exports = {
  config: {
    name: "baby",
    aliases: [],
    author: "Amir",
    version: "1.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "Ai"
    },
    category: "Ai",
    guide: {
      en: "{p} [text]"
    }
  },
  onStart: async function ({ api, event, args }) {
  const prompt = args.join(' ');

  try {
    // Available Models: "v3", "v3-32k", "turbo", "turbo-16k", "gemini"
    if (!prompt) {
      api.sendMessage('𝐆 𝐁𝐨𝐋𝐞𝐢𝐧 baby 𝐊𝐢𝐢 𝐉𝐚𝐚𝐍 ◉‿◉', event.threadID, event.messageID);
      api.setMessageReaction('❓', event.messageID, () => {}, true);
    } else {
      api.setMessageReaction('⏱️', event.messageID, () => {}, true);
      const response = await herc.question({ model: 'v3', content: prompt });
      api.sendMessage(response.reply, event.threadID, event.messageID);
      api.setMessageReaction('', event.messageID, () => {}, true);
    }
  } catch (error) {
    api.sendMessage('⚠️ Something went wrong: ' + error, event.threadID, event.messageID);
    api.setMessageReaction('⚠️', event.messageID, () => {}, true);
  }
  }
};
