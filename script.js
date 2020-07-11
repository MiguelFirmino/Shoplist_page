// DEFINE CONSTANSTS
const nameInput = document.querySelector(".name-input");
const addBtn = document.querySelector(".add-btn");
const shopList = document.querySelector(".shop-list");

// EVENT LISTENERS
addBtn.addEventListener("click", addItem)
shopList.addEventListener("click", checkDelete)

function addItem() {
    if (nameInput.value === "") {
        return;
    }

    let newItem = document.createElement("li");

    let itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.innerHTML = nameInput.value;
    newItem.appendChild(itemName);

    let checkButton = document.createElement("button");
    checkButton.classList.add("check-btn");
    checkButton.innerHTML = "CHECK";
    newItem.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = "DELETE";
    newItem.appendChild(deleteButton);

    shopList.appendChild(newItem);
    nameInput.value = "";
}

function checkDelete(event) {
    var target = event.target;
    var parent = target.parentElement;
    
    if (target.classList[0] === "check-btn") {
        parent.classList.toggle("checked");
    }

    if (target.classList[0] === "delete-btn") {
        parent.remove();
    }
}