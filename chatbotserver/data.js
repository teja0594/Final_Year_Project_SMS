// These are words/phrases the user could type in

const trigger = [
  ["hi", "hey", "hello", "good morning", "good afternoon","good evening"],
  ["what can u do ?"],
  ["hod"],
  ["change password"],
  ["results"],
  ["events"],
  ["are you a Robot?"],
  ["how can you help me?"],
  ["what were you made of?"],
  ["where can i find information"],
];

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [
  ["Hello! I am University Bot", "Hi! I am University Bot", "Hey! I am University Bot", "Hi there! I am University Bot"],
  [ " I can Provide Information regarding exam dates , fee due dates & acaemic details" ],
  [  "HOD: V Hari Kiran Phone:9908106167 Email:harivege@kluniversity.in    sTelegram: @harivege" ],
  ["Contact your Administrator"],
  ["Results Date will be announced in University Website"],
  ["Samyak March 19 20         Hashinclude Coming soon"],
  ["Yes, I'm a bot developed to resolve issues related to SMS"],
  ["I'm here to resolve issues you face in sms. I can help you in viewing attendance,courses, certifications, registration dates  and so on...."],
  ["I'm developed by a team using angular interface to resolve issues related to SMS"],
  ["Login with your credentials-->goto dashboard-->select (required module name*)"],
];
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening..."
];


// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

module.exports = {trigger, reply, alternative, coronavirus};
