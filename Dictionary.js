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
const word3 = new Dictionary("co słychać", "як справи")
const word4 = new Dictionary("ojciec", "батько")
const word5 = new Dictionary("rodzina", "сім'я")
const word6 = new Dictionary("matka", "мати")
const word7 = new Dictionary("córka", "донка")
const word8 = new Dictionary("syn", "син")
const word9 = new Dictionary("rodzice", "батьки")

export {words}