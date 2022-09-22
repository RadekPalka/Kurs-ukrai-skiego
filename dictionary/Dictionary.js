const words = []
class Dictionary {
  constructor(polWord, ...ukrWords){
    this.polWord = polWord
    this.ukrWord = [...ukrWords]
    words.push(this)
  }
}

const word1 = new Dictionary("przepraszam", "вибачте")
const word2 = new Dictionary("proszę (np. o pomoc)", "будь ласка")
const word3 = new Dictionary("co słychać", "як справи")
const word4 = new Dictionary("ojciec", "батько")
const word5 = new Dictionary("rodzina", "сім'я")
const word6 = new Dictionary("matka", "мати")
const word7 = new Dictionary("córka", "донька", "дочка")
const word8 = new Dictionary("syn", "син")
const word9 = new Dictionary("rodzice", "батьки")