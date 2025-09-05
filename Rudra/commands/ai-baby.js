module.exports.config = {
  name: "botJoinAnnounce",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Faheem Akhtar",
  description: "Send text-only message when bot joins a group",
};

module.exports.run = async function ({ api, event }) {
  const botID = api.getCurrentUserID();
  const { threadID, logMessageData } = event;

  const isBotJoining = logMessageData?.addedParticipants?.some(
    (p) => p.userFbId == botID
  );
  if (!isBotJoining) return;

  const message = `🤖 Bot connected successfully!\n\n👑 Owner: ایـــــکَ حسیـــــــن محتــــــــرم\n🔗 Facebook: https://www.facebook.com/Neesli.ankho.2023\n\n😘approval k lye owner:ایـــــکَ حسیـــــــن محتــــــــرم se rbta kren`;
let link = [
							"https://i.imgur.com/k74f2V8.gif",
							"https://i.imgur.com/N5imJAj.gif",
							"https://i.imgur.com/gGkhPGm.gif",
							"https://i.imgur.com/pA8vhHW.gif",
						];


						let callback = () => api.sendMessage(
							{
								body: msg,
								attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"),
								mentions
							},
							event.threadID,
							() => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg")
						);

  return api.sendMessage(message, threadID);
};
