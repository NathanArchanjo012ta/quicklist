let items = []

function addItem() {
  const itemName = document.querySelector("#item").value

 if (itemName === "") {
  alert("Digite um item válido!")
  return
}


  const item = {
    name: itemName,
    checked: false
  }

  items.push(item)

  document.querySelector("#item").value = ""

  showitemsList()

  console.log(items)
}

function showitemsList() {
  const sectionList = document.querySelector(".list")
  sectionList.textContent = "" 
items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))


  items.map((item, index) => {
    sectionList.innerHTML += `
      <div class="item">
        <div>
          <input type="checkbox" name="list" id="item-${index}"  ${item.checked && "checked"}>
          <div class="custom-checkbox" onclick = "checkItem('${item.name}')">
            <img src="./assets/checked.svg" alt="checked">
          </div>
          <label for="item-${index}" onclick = "checkItem('${item.name}')" >${item.name}</label>
        </div>
        <button onclick="removeItem('${item.name}')">
          <img src="./assets/trash-icon.svg" alt="trash icon">
        </button>
      </div>
    `
  })
}
localStorage.setItem("items", JSON.stringify(items))

function checkItem(itemName){
  const item = items.find((item) =>item.name === itemName)
 item.checked = !item.checked
 showitemsList()

}


function removeItem(itemName){
  const itemIndex = items.findIndex((item) => item.name === itemName)
  const divwarning = document.querySelector(".warning")

  divwarning.classList.remove("hide-warning")
  setTimeout(()=>{
    divwarning.classList.add("hide-warning")
  }, 4000)


  if(itemIndex !== -1){
    items.splice(itemIndex, 1)
  }
  showitemsList()
}

function addHideWarningClass(){
  document.querySelector(".warning").classList.add("hide-warning")
}


function verifyLocalStorageItems() {
  const localStorageItems = localStorage.getItem("items")

  if (localStorageItems) {
  items = JSON.parse(localStorageItems)
  showitemsList()
}

}
verifyLocalStorageItems()

