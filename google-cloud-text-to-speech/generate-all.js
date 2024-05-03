const textToSpeech = require("@google-cloud/text-to-speech");

const fs = require("fs");
const fsPromises = require("node:fs/promises");
const client = new textToSpeech.TextToSpeechClient();

fs.readdir("./src", async (err, files) => {
  for (const file of files) {
    console.log("🔃 Processing:", file);

    const ssmlContent = fs.readFileSync(`./src/${file}`, "utf8");

    const [response] = await client.synthesizeSpeech({
      input: { ssml: ssmlContent },
      voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    });

    await fsPromises.writeFile(
      `./output/${file.replace("html", "mp3")}`,
      response.audioContent,
      "binary"
    );

    console.log("🎉 Processed:", file);
  }

  console.log("✅ Done!");
});
