document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    implementToDo(e.target[0].value);
    form.reset();
  });
});

function implementToDo(todo) {
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', (e) => e.target.parentNode.remove());
  li.appendChild(document.createTextNode(`${todo} `));
  li.appendChild(btn);
  ul.appendChild(li);
}