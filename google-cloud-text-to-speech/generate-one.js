const textToSpeech = require("@google-cloud/text-to-speech");

const fs = require("fs");
const fsPromises = require("node:fs/promises");
const client = new textToSpeech.TextToSpeechClient();

const fileName = "prosody";

async function quickStart() {
  console.log("🔃 Processing:", fileName);

  const ssmlContent = fs.readFileSync(`./src/${fileName}.html`, "utf8");

  const [response] = await client.synthesizeSpeech({
    input: { ssml: ssmlContent },
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "MP3" },
  });

  await fsPromises.writeFile(
    `./output/${fileName}.mp3`,
    response.audioContent,
    "binary"
  );
  console.log("🎉 Processed:", fileName, "and finished!");
}

quickStart();
