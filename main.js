const form= document.querySelector("form")
const input = document.querySelector("input")
const messageParagraph = document.querySelector(".message")
const btn = document.querySelector("button")
const showAllBtn = document.querySelector(".show-all")
const ukrainianWord = document.querySelector(".ukrainian-word")
const wordsCopy = [...words]
const wordsToLearn = []
let randomIndex, action
let badAnswers = 0

const displayWord = () =>{
  randomIndex = Math.floor(Math.random()*wordsCopy.length)
  ukrainianWord.textContent = wordsCopy[randomIndex].polWord
  action ="check"
  input.select()
  input.value = ""
}
displayWord()

const summary = () =>{
  messageParagraph.innerHTML = `Koniec lekcji.<br>Ilość wyrazów: ${words.length}<br>lość złych odpowiedzi: ${badAnswers}`
  if (wordsToLearn.length >0){
    messageParagraph.innerHTML +=`<br>Wyrazy które musisz powtórzyć: ${wordsToLearn.join(", ")}`
  }
  btn.textContent = "Powtórz lekcję"
  action = "repeat"
}

const check = () =>{
  const userWord = input.value.toLowerCase()
  window.focus()
  const {polWord, ukrWord: ukrWords} = wordsCopy[randomIndex]
  if ( ukrWords.includes(userWord)){
    messageParagraph.textContent= "Dobrze !!!"
    wordsCopy.splice(randomIndex, 1)
    if (wordsCopy.length === 0){
      summary()
    }
  }
  else{
    badAnswers ++
    if (!wordsToLearn.includes(polWord)){
      wordsToLearn.push(polWord)
    }
    messageParagraph.textContent= `Źle !!! Prawidłowa odpowiedź to ${ukrWords}`
  }
  action = "next"
}

const handleSubmit= e => {
  e.preventDefault()
  if (action === "check"){
    btn.textContent = "Następny wyraz"
    check()
  }
  else if (action === "next"){
    messageParagraph.textContent = ""
    btn.textContent = "Sprawdź"
    displayWord()
  }
  else{
    location.reload()
  }
}

const showAll = () =>{
  document.body.textContent= ""
  document.body.classList.add("show-everything")
  words.forEach(({polWord, ukrWord})=>{
    document.body.innerHTML += `${polWord}: ${ukrWord}<br>`
      })
  document.body.innerHTML +="<br>"
  document.body.append(btn)
  btn.style.display= "block"
  btn.style.margin="10px auto"
  btn.textContent = "Zacznij od nowa"
  btn.addEventListener("click", ()=>{
    location.reload()
  })
}

showAllBtn.addEventListener("click", showAll)

form.addEventListener("submit", handleSubmit)
