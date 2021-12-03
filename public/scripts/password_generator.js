$(document).ready(() => {const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
console.log('characternumber',characterAmountRange.value)
console.log('characterrange', characterAmountRange.value)
characterAmountNumber.addEventListener('input ',  (event) => {syncCharacterAmount(event)})
characterAmountRange.addEventListener('input' , function (e) {
  console.log(this.characterAmountRange)           // logs the className of my_element
  console.log(e.currentTarget) // logs `true`
  syncCharacterAmount(e)
})
characterAmountNumber.addEventListener('input' , function (e) {
  console.log(this.characterAmountNumber)           // logs the className of my_element
  console.log(e.currentTarget) // logs `true`
  syncCharacterAmount(e)
})

function syncCharacterAmount(r){
  console.log('event' , r)
  const value = r.target.value
  console.log('value', value)
  characterAmountNumber.value = value
  console.log('characternumber',characterAmountRange.value)
  characterAmountRange.value = value
  console.log('characterrange', characterAmountRange.value)
}

})
