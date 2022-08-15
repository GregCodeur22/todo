const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const nav = document.querySelector("ul");
let array = [];

const todoLIst = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    array.push(input.value);

    input.value = "";
    array.forEach((list) => {
      nav.innerHTML += ` <li> ${list} </li>`;
      console.log(array);
      removeArray();
    });
  });
};
todoLIst();

function removeArray() {
  array.forEach((List) => {
    List.remove();
  });
}
