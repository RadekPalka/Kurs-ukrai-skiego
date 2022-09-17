const form= document.querySelector("form")
const input = document.querySelector("input")
const messageParagraph = document.querySelector(".message")
const btn = document.querySelector("button")
const ukrainianWord = document.querySelector(".ukrainian-word")

const check = e =>{
  e.preventDefault()
  messageParagraph.textContent= "OK"
}

form.addEventListener("submit", check)