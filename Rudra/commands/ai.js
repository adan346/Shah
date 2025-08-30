const axios = require('axios');

module.exports.config = {
  name: 'Downloader',
  version: '1.1.3',
  hasPermssion: 0,
  credits: 'Amir',
  description: 'Ai Social Downloader',
  commandCategory: 'Downloader',
  usages: 'ai [prompt]',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
    const amir = args.join(" ");
    if (!amir) {
        return api.sendMessage("Yes, I'm Ai Model MaDe By Farebiiw Amir! How may I help you today?", event.threadID, event.messageID);
    }

    // Access the senderID and sender's name from the event object
    const senderID = event.senderID;
    const senderName = event.senderName;

    api.sendMessage(`🔍"${amir}" \nRequested by @${senderID}`, event.threadID, async (error, messageInfo) => {
        if (error) {
            console.error(error);
            return;
        }

        try {
            // Include senderID in the API request
            const res = await axios.get(`https://api.whahhh.repl.co/test?prompt=${amir}&name=${senderName}&id=${senderID}`);
            const data = res.data.result;
            const av = res.data.av;

            if (av) {
                const attachmentStream = await axios.get(av, { responseType: 'stream' });
                const g = data.replace(/{name}/g, senderName || 'This Video sent from Amir Server');
                api.sendMessage({
                    body: g,                          attachment: attachmentStream.data
                }, event.threadID, messageInfo.messageID);
            } else {
                const g = data.replace(/{name}/g, senderName || '\nBaBe WelcoMe to Amir Ai Model  (Amir Server) ');
                api.sendMessage(g, event.threadID, messageInfo.messageID);
            }
        } catch (error) {
            console.error(error);
            api.sendMessage(error.message, event.threadID, messageInfo.messageID);
        }
    });
};
