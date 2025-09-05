module.exports.config = {
  name: "botreply",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Ayan Ali",
  description: "Funny desi replies when someone types only 'bot'",
  commandCategory: "fun",
  usages: "Type exactly 'bot'",
  cooldowns: 2,
  listenEvents: true // ✅ Required to make handleEvent work
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID, senderID } = event;
  if (!body) return;

  const lowerCaseMsg = body.toLowerCase().trim();

  // ✅ Only trigger when message is exactly "bot"
  if (lowerCaseMsg !== "bot") return;

  try {
    const userInfo = await api.getUserInfo(senderID);
    const userName = userInfo[senderID]?.name || "jaan";

    const replies = [
    "Tum jab 'bot' bolte ho, mera gurda dhadakne lagta hai 🥺🙊🙈",
    "Bhai jaan group mein gandi baatein mat karo",
     "Lips kissing is not romance... it's sharing bacteria",
      "Tum mera dil chura nahi paye... kya faida tumhari chor jaisi shakal ka!!",
      "Pyaari voice wali girls mujhe voice msg kar sakti hain🙂",
      " Pata nahi log itni balance life kaise guzarte hain... mera tou kabhi paratha pehle khatam ho jaata hai kabhi anda",
      "Kaash hum dono WhatsApp pe hote ❤️🥺. edhrr ao tumyy godee me uthaoo💋' 💄😒",
      "hyee hyee... 'beta sabar ka imtihaan mat le😩👐",
      "Us ne kaha chand ho tum... i love u ummmmah🌚😂",
      "Mujhe us se mohabbat thi... par us ke signal weak thay 📶❌",
      "Tere bina to raaton ki neend gayi... par neend gayi nahi, tu sapno mein dikh gaya 👻",
      "Tujh pe ghazal likhna chahta tha.. par dimaag bola 'waste of ink' 🖊️😤",
      "Tere pyar ne hamein woh dukh diye... jaise wedding card ke baad rishta tod diya ho 📩💔",
      "Tujhe bhoolna chahta hoon... par tu  mobile use kro to yaad aa jate hai 👡😭",
      "Tu zindagi ka wo safha hai... jise main page number samajh ke ulta tha 📖",
      "Mohabbat ka chaska lagaya us ne... aur chuski ki tarah chhod bhi gaye🧊💔",
      "𝐥𝐚𝐚𝐧𝐚𝐭 𝐛𝐡𝐢 𝐤𝐲𝐚 𝐜𝐡𝐞𝐞𝐳 𝐡𝐚𝐢 𝐚𝐝𝐫𝐞𝐬𝐬 𝐧𝐚𝐡 𝐛𝐡𝐢 𝐥𝐢𝐤𝐡𝐨𝐧 𝐦𝐮𝐬𝐭𝐚𝐡𝐢𝐪 𝐚𝐟𝐫𝐚𝐚𝐝 𝐭𝐚𝐤 𝐩𝐚𝐡𝐨𝐧𝐜𝐡 𝐣𝐚𝐭𝐢 𝐡𝐚𝐢🤣",
      "𝐰𝐨𝐡 𝐣𝐨 𝐤𝐚𝐫𝐨𝐫𝐫𝐨𝐧 𝐦𝐞𝐢𝐧 𝐚𝐢𝐤 𝐡𝐚𝐢 𝐧𝐚! 𝐰𝐨𝐡 𝐦𝐞𝐢𝐧 𝐤𝐡𝐮𝐝 𝐡𝐢 𝐡𝐨",
      "Humry Shona baby kbii humra tha ab kese or ka hoga🥺🥺🥺",
      "𝐀𝐚𝐨 𝐝𝐚𝐫𝐝 𝐛𝐚𝐧𝐭𝐭𝐚𝐲 𝐡𝐚𝐢𝐧 𝐓𝐮𝐦 𝐝𝐚𝐫𝐰𝐚𝐳𝐚𝐲 𝐦𝐞𝐢𝐧 𝐮𝐧𝐠𝐥𝐢 𝐝𝐨 𝐏𝐡𝐢𝐫 𝐦𝐢𝐥 𝐤𝐚𝐫 𝐜𝐡𝐞𝐞𝐤𝐡𝐚𝐢𝐧 𝐦𝐚𝐚𝐫𝐭𝐚𝐲 𝐡𝐚𝐢𝐧🙈🙈",
      "𝐓𝐚𝐢𝐫𝐚𝐲 𝐣𝐚𝐚𝐧𝐞 𝐤𝐞 𝐛𝐚𝐚𝐝 𝐰𝐚𝐪𝐭 𝐭𝐡𝐚𝐦 𝐬𝐚 𝐠𝐚𝐲𝐚 𝐭𝐡𝐚 𝐁𝐚𝐚𝐝 𝐦𝐞𝐢𝐧 𝐩𝐚𝐭𝐚 𝐜𝐡𝐚𝐥𝐚 𝐤𝐞 𝐆𝐡𝐚𝐫𝐢 𝐤𝐚 𝐜𝐞𝐥𝐥 𝐤𝐡𝐚𝐭𝐚𝐦 𝐡𝐨𝐠𝐚𝐲𝐚 𝐭𝐡𝐚🤣🙈",
      "Itna single hoon ke khwab mein bhi larki ke haan karne se pehle aankh khul jaati hai 🙂🤣😂",
      "Aao pyaar karein💋💋😅",
      "Tumko meri ittu si bhi yaad nahi aati 🥹",
       "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 ",
    "Bot Nah Bol Oye Janu bol Mujhe ",
    "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒",
    "Main gariboo se baat nahi karta 😉😝😋🤪",
    "Itna Na Pass aa Pyar ho Jayga",
    "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 ",
    "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi",
    "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga",
    "Tu Bandh nhi Karega kya?",
    "Gali Sunna H kya?😜",
    "Teri Maa Ki Bindiya🤭",
    "Aree Bandh kar Bandh Kar",
    "M hath jod ke Modi Ji Se Gujarish Karta hu",
    "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h",
    " Faheem Ko Bol Dunga Me Mujhe Paresan Kiya To",
    "Tum Na Single Hi Maroge",
    "Tujhe Apna Bejjati Karne Ka Saukh hai?",
    "Abhi Bola Toh Bola Dubara Mat Bolna",
    "Teri To Ruk Tu Bhagna Mat",
    "Bol De koi nahi dakh rha 🙄",
    "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝",
    "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂",
    "Are Bolo Meri Jaan Kya Hall Hai😚 ",
    "Ib Aja Yahan Nhi Bol Sakta 🙈😋",
    "Mujhe Mat BuLao Naw Main buSy Hu Naa",
    "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺",
    "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪",
    "Kal Haveli Pe Mil Jara Tu 😈",
    "Aagye Salle Kabab Me Haddi 😏",
    "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na",
    "FarMao 😒",
    "BulaTi Hai MaGar Jaane Ka Nhi 😜",
    "Main To Andha Hun 😎",
    "Phle NaHa kar Aa 😂",
    "Aaaa Thooo 😂😂😂",
    "Main yahin hoon kya hua sweetheart ,",
    "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H",
    "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga",
    "WaYa KaRana Mere NaL 🙊",
    "MaiNy Uh Sy Bt Nhi kRrni",
    "MeKo Kxh DiKhai Nhi Dy Rha 🌚",
    "Bot Na BoL 😢 JaNu B0ol 😘 ",
    "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋",
    "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪",
    "Itna Na Pass aa Pyar h0o JayGa",
    "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 ",
      "Itna single hoon ke khwab mein bhi larki ke haan karne se pehle aankh khul jaati hai🙂",
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    return api.sendMessage({
      body: `@${userName}, ${randomReply}`,
      mentions: [{
        tag: `@${userName}`,
        id: senderID
      }]
    }, threadID, messageID);
  } catch (error) {
    console.error("BotReply Error:", error);
  }
};

module.exports.run = () => {};
