import  {words}  from "./Word.js"

const form= document.querySelector("form")
const input = document.querySelector("input")
const messageParagraph = document.querySelector(".message")
const btn = document.querySelector("button")
const showAllBtn = document.querySelector(".show-all")
const ukrainianWord = document.querySelector(".ukrainian-word")


const wordsCopy = [...words]
let randomIndex
let action 
const displayWord = () =>{
  randomIndex = Math.floor(Math.random()*wordsCopy.length)
  ukrainianWord.textContent = wordsCopy[randomIndex].polWord
  action ="check"
  input.select()
  input.value = ""
}
displayWord()

const summary = () =>{
  messageParagraph.textContent = "Koniec lekcji"
  btn.textContent = "Powtórz lekcję"
  action = "repeat"
}

const check = () =>{
  
  if (input.value.toLowerCase() === wordsCopy[randomIndex].ukrWord){
    messageParagraph.textContent= "Dobrze !!!"
    wordsCopy.splice(randomIndex, 1)
    if (wordsCopy.length === 0){
      summary()
    }
  }
  else{
    messageParagraph.textContent= "Źle !!!"
  }
  action = "next"
}

const handleSubmit= e => {
  e.preventDefault()
  if (action === "check" && wordsCopy.length >0){
    btn.textContent = "Następny wyraz"
    check()
  }
  else if (wordsCopy.length >0 && action === "next"){
    messageParagraph.textContent = ""
    btn.textContent = "Sprawdź"
    displayWord()
  }
  else{
    location.reload()
  }
}

form.addEventListener("submit", handleSubmit)
