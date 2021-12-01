let form = document.getElementById('form');
let ul = document.getElementById('list');
let input = document.getElementById('input');
let error = document.createElement("p");

form.addEventListener('submit', addListItem);
ul.addEventListener('click', changeList);
input.addEventListener("blur", onBlur);

function addListItem(e) {
  e.preventDefault();
  if (isAlphaNumeric(input.value)) {
    const li = createListItem();
    ul.append(li);
    input.focus();
  }
}

function onBlur(e) {
  let target= e.target;
  if (isAlphaNumeric(target.value)) {
    error.innerText = '';
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
      error.innerText = "Поле может состоять из двух до пятнадцати символов латинского алфавита, содержать заглавные и строчные буквы, цифры."
      ul.before(error);
  }
}

function isAlphaNumeric(value) {
 return /^([a-zA-Z0-9_-\s]){2,15}$/gi.test(value);
}

function removeBtn() {
  let button = document.createElement("button");
  button.innerText = "Удалить";
  return button;
}

function createListItem() {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "li-yellow";
  let button = removeBtn();
  li.append(button);
  return li;
}

function changeColor(e) {
  e.classList.toggle("li-green");
}

function changeList(e) {
  let target = e.target;
  if(target.tagName === "BUTTON"){
    target.closest("li").remove();
   } else if (target.tagName === "LI") {
    changeColor(target);
   } else
   console.log("error");
}
 