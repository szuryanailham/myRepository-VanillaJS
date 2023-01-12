const form = document.querySelector(".form-input");
const alert = document.querySelector(".alert");
const submit = document.querySelector(".button");
const input = document.getElementById("input-agenda");
const list = document.querySelector(".list-agenda");
const EditBtn = document.querySelector(".btn-edit");
const clearbtn = document.querySelector(".btn-clear");
const container = document.querySelector(".contain-list");

let editElement;
let editFlag = false;
let editID = "";

// ADD ITEM WHEN SUBMIT ON CLICK
submit.addEventListener("click", addItem);
clearbtn.addEventListener("click", clearItem);
window.addEventListener("DOMContentLoaded", setupItems);

function addItem(e) {
  e.preventDefault();
  const value = input.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("div");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("list-box");
    element.innerHTML = `
      <h4 class ="text">${value}</h4>
    <div class="buttons">
      <button class="btn-edit"><i class="uil uil-edit icon edit"></i></button>
      <button class="btn-delete"><i class="uil uil-trash-alt icon delete"></i></button>
    </div>`;

    const EditButton = element.querySelector(".btn-edit");
    // KETIKA EDIT BUTTON DI KLIK
    EditButton.addEventListener("click", editItem);
    const DeleteBtn = element.querySelector(".btn-delete");
    // KETIKA DELETE BUTTON DI KLIK
    DeleteBtn.addEventListener("click", deleteItem);

    list.appendChild(element);
    showAlert("Item add to the List", "sucess");
    container.classList.add("show-contain-list");

    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    showAlert("value changed", "sucess");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    showAlert("please enter value", "danger");
  }
}

//  FUNCTION TO SHOW ALERT AFTER ACTION
function showAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //  MENGHILANGKAN ALERT
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// FUNCTION MENAMBAHKAN LIST KE DALAM STORAGE WEB
function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
function addToLocalStorage(id, value) {
  const daily = { id, value };
  let items = getLocalStorage();
  items.push(daily);
  localStorage.setItem("list", JSON.stringify(items));
}

// FUNCTION UNTUK MENGEBALIKAN DEFAULT INPUT DI PAGE
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submit.textContent = "submit";
}
// FUNCTION UNTUK MENGAPUS INPUT PADA CONTAINER LIST
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-contain-list");
    showAlert("Item removed", "danger");
    setBackToDefault();
    // Remove from local Storage
    removeFromLocalStorage(id);
  }
}
// FUNCTION MENGAPUS ITEM DI LOCAL STORAGE
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id !== item) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// FUNCTION MENGEDIT ISI ITEM PADA LIST
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
}
// FUNCTION EDIT VALUE AND ID PADA STORAGE PAGE
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items.map((item) => {
    if (item.id == id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// MENDIRIKAN ITEM DENGAN SETUP ITEM
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-contain-list");
  }
}

function clearItem() {
  const items = document.querySelectorAll(".list-box");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-contain-list");
  showAlert("empty list", "danger");

  localStorage.clear();
  setBackToDefault();
}
// Set Back to Default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submit.textContent = "submit";
}
