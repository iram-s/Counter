// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0
let countEl =  document.getElementById("count-el")
function increment(){
  count = count + 1
  countEl.innerText = count
  console.log(count)
}



function save() {
  let store = count + " - "
  let saveEl = document.getElementById("save-el")
  count = 0
  countEl.textContent  = count

  saveEl.textContent += store

  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph


}

