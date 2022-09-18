const words = []
class Dictionary {
  constructor(polWord, ukrWord){
    this.polWord = polWord
    this.ukrWord = ukrWord
    words.push(this)
  }
}

const word1 = new Dictionary("przepraszam", "вибачте")
const word2 = new Dictionary("proszę (np. o pomoc)", "будь ласка")
const word3 = new Dictionary("co słychać?", "як справи?")

export {words}