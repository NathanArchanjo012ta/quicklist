const items = []

function addItem() {
  const itemName = document.querySelector("#item").value

  if (itemName.trim() === "") return // impede adicionar item vazio

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
  sectionList.innerHTML = "" // limpa antes de reescrever

  items.map((item, index) => {
    sectionList.innerHTML += `
      <div class="item">
        <div>
          <input type="checkbox" name="list" id="item-${index}">
          <div class="custom-checkbox">
            <img src="./assets/checked.svg" alt="checked">
          </div>
          <label for="item-${index}">${item.name}</label>
        </div>
        <button onclick="removeItem('${item.name}')">
          <img src="./assets/trash-icon.svg" alt="trash icon">
        </button>
      </div>
    `
  })
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
