const words = []
class Dictionary {
  constructor(polWord, ...ukrWords){
    this.polWord = polWord
    this.ukrWord = [...ukrWords]
    words.push(this)
  }
}