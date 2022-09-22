const words = []
class Dictionary {
  constructor(polWord, ...ukrWords){
    this.polWord = polWord
    this.ukrWords = [...ukrWords]
    words.push(this)
  }
}