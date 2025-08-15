const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Pakistan").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Kya Tu ELvish Bhai Ke Aage Bolega🙄" , "🙄Tere intezar py lanat
tere khyal py aa thu😛" , "غریب کالا ہوتو کالوو☻

امیر کالا ہوتو پری زاد 😊
واہ..😒🙈" , "Chay pe Chaloge" , "Mere liye Chay Bana Kar LA ,Pura din Dekho Bot BoT🙄" , "Din vicho tere Layi Teym Kadd ke, Kardi me Promise     Milan aungi" ,  "" , "Je koi shaq ni , Kari check ni" , "ME HERAAN HU KI TUM BINA DIMAG KESE REH LETE HO☹️" , "میرا تو کوئی جانو بھی نہیں ھے
میں بھیگی بھیگی سڑکوں پہ کس کا انتطار کرو😂😂😂😏🙄" , "Bewafa Nikali re tu🙂🤨", "Systemmmmmmm😴" , "Kiran ko bulao mujy tumsy koi bat nai karni", "Shani to larkiyo k inbox mai mily ga" , "یہ نیٹ ہے یا جانو ہے
 اچھا خاسا چلتا چلتا غائب ہو جاتا ہے😫🤣" , "Ye dukh kahe nahi khatm hota 🙁" , "Tum to dokebaz ho shani" , "Ayaan mari jan aj kis k pechy pary ho" , "Mera aasmaan dhunde teri zamin" , "Kal ana abhi lunch time hai" , "Jab dekho B0T B0T b0T😒😒", "chup kar k betho nai to Rj boss bo bol k kick krwa do ga🤭", "Kab ayega mere banjaare" , "Tum wahi ho na ,jisko.me.nahi janti 🙂" , "Ye I love you kya hota hai" , "Sunai deta hai mujhe behri nahi hu me   😒" , "so elegent, so beautiful , just looking like a wow🤭" , "mari wife kab aye gi🙂" , "نہ پیشی ہو گی نہ گواہ ہوگا☠️
اب جو بھی الجھے گا تباہ ھوگا🦧🤔" , "I Love you baby , mera recharge khtm hone wala h" , "🙄Apki adaye
bhar mei jaye🤭" , "apne gf ko last time kab dekha tha, sedha bhar mai jao🙈" , "Arry Bas Kar🤣😛" , "ایک دن ضرور ائے گا 🤔 کیونکہ 😆😃دو دن ایک ساتھ نہیں ا 😱سکتے 🤧" , "naam adiya kumar 7vi kaksha me padhte hai favret subject begon😘" , "Mera Dimag Mat Khaya kro😒😒" , "Chuppp Saatvi Fail😒" , "Saste Nashe Kab Band kroge" , "Mai Jaanu Ke sath Busy hu yar, mujhe mat balao" , "Haye Jaanu Mujhe Yaad Kiya🙈" , "Hayee ese mt bulaya kro, mujhe sharm aati h" , "System pe system betha rahi chhori bot ki" , "کاش میں چپیڑ لکھوں اور تجھے ٹھا کر کے وج جاے😹😋" , "me idhar se hu aap kidhar se ho" , "Khelega ludo larkiyo k sath🙈🙈" , "aa gaye janu ki ib sy ummmaa umhaaa kar k" , "e halo bhai darr rha hai kya" , "akh ladi bado badi" , "haaye garmi😕" , "Ao kabhi haweli pe😍" , "Khelega ludo mary sath🥴" , "Hallo bai tu darr raha hai kya" , "janu bula raha h mujhe" , "ایڈمن گانا گاتے ہوئے ۔۔۔۔۔

اگر تم مل جاؤ نہانا چھوڑ دینگے ہم 🥲🥲😘" , "haa meri jaan" , "Agye Phirse Bot Bot Krne🙄" , "konse color ki jacket pehne ho umm btao na😚" , "ہر پیاری لڑکی کالے لڑکے کے ساتھ سیٹ ہے....😒🙂🤳"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔶${name}🔶,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 : RJ Rizwan🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
