const words = []
class Word {
  constructor(polWord, ukrWord){
    this.polWord = polWord
    this.ukrWord = ukrWord
    words.push(this)
  }
}

const word1 = new Word("przepraszam", "вибачте")
const word2 = new Word("proszę (np. o pomoc)", "будь ласка")
const word3 = new Word("co słychać?", "як справи?")

export {words}