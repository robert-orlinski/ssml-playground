# Speech Synthesis Markup Language (SSML)

Links: [Docs](https://cloud.google.com/text-to-speech/docs/ssml) [W3C Spec](https://www.w3.org/TR/speech-synthesis11/).

Markup language that can be used for defining text to be read by Text-to-Speech systems like Web Speech API or Google Text-to-Speech API.

Part of the examples below. Rest can be found nicely written in [Google Cloud Docs](https://cloud.google.com/text-to-speech/docs/ssml).

> To run 2 scripts from the `/google-cloud-text-to-speech` directory, you need to [set up the Google Cloud account](https://console.cloud.google.com/freetrial) and then [Authenticate to Text-to-Speech](https://cloud.google.com/text-to-speech/docs/authentication).

## `say-as`

```html
<speak>
  <p><say-as interpret-as="time" format="24">12:00</say-as></p>
  <p><say-as interpret-as="unit">10 foot</say-as></p>
  <p><say-as interpret-as="ordinal">1</say-as> grade</p>
  <p><say-as interpret-as="duration" format="m:s">12:30</say-as></p>
</speak>
```

Interpreting something in a specific way (as currency, unit, duration, etc.).

More in [Docs](https://cloud.google.com/text-to-speech/docs/ssml#say%E2%80%91as).

## `par`

```html
<speak>
  <par>
    <media begin="1s">
      <audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
        <desc>T-rex roar</desc>
        ROOARRRRR
      </audio>
    </media>
    <media>
      <speak>You can hear the sound of the t-rex in the background.</speak>
    </media>
  </par>
</speak>
```

Bringing sounds together.

## `seq`

```html
<speak>
  <seq>
    <media begin="1s">
      <speak>Sentence after 1 second.</speak>
    </media>
    <media begin="3s">
      <speak>And another 3 seconds after the previous one.</speak>
    </media>
  </seq>
</speak>
```

Like `par` but in sequence, not in parallel.

## `media`

Part of the `par` or `seq` elements.

## `phoneme`

```html
<speak>
  <phoneme alphabet="ipa" ph="ˌmænɪˈtoʊbə">manitoba</phoneme>
  <phoneme alphabet="x-sampa" ph='m@"hA:g@%ni:'>mahogany</phoneme>
</speak>
```

Phonetic transcription.

See: [Supported phonemes and levels of stress](https://cloud.google.com/text-to-speech/docs/phonemes).

## `voice`

```html
<speak>
  <p>
    <s>Here comes the conversation.</s>
    <s><voice gender="female">I am a woman.</voice></s>
    <s><voice gender="male">I am a man.</voice></s>
    <s><voice language="pl-PL" gender="male">A ja jestem z Polski.</voice></s>
  </p>
</speak>
```

Setting a voice.

## `break`

```html
<speak>
  <p>
    <s>Some text <break time="1s" /> and then text after 1 second.</s>
    <s>
      And then <break strength="medium" />text after medium-strength break
      <break strength="x-weak" />x-weak break and <break strength="x-strong" />x-strong break
    </s>
  </p>
</speak>
```

## `audio`

```html
<speak>
  <p>Let's listen to the sound of the t-rex!</p>
  <p>
    <audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
      <desc>T-rex roar</desc>
      ROOARRRRR
    </audio>
  </p>
</speak>
```

Playing audio.

## `prosody`

```html
<speak>
  <p>
    <prosody rate="slow">This is the slow voice.</prosody>
  </p>
  <p>
    <prosody rate="x-fast">This is the very fast voice.</prosody>
  </p>
  <p>
    <prosody volume="x-soft">This is the very soft voice.</prosody>
  </p>
  <p>
    <prosody volume="x-loud">This is the very loud voice.</prosody>
  </p>
  <p>
    <prosody pitch="low">This is the low pitch voice.</prosody>
  </p>
  <p>
    <prosody pitch="high">This is the high pitch voice.</prosody>
  </p>
  <p>
    <prosody pitch="-10st">This is the customized pitch voice.</prosody>
  </p>
  <p>
    <prosody pitch="+10st">This is another customized pitch voice.</prosody>
  </p>
</speak>
```

Giving specific tone to the voice.

## `emphasis`

```html
<speak>
  <emphasis level="strong">This is an important announcement.</emphasis>
  <emphasis level="moderate">This is an important announcement.</emphasis>
  <emphasis level="emphasis">This is an important announcement.</emphasis>
  <emphasis level="reduced">This is an important announcement.</emphasis>
</speak>
```

I like to call it `prosody`'s presets.

## `p` and `s`

```html
<p><s>This is sentence one.</s><s>This is sentence two.</s></p>
```

Paragraphs and sentences.

## `sub`

```html
<sub alias="World Wide Web Consortium">W3C</sub>
```

Replacing text with something specific to read. Useful in case of abbreviations for instance.
