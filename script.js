const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];


function renderElements(tasks) {
  const ulTasks = document.querySelector('.tasks__list')
  ulTasks.innerText = ''
  for (let i = 0; i < tasks.length; i++) {

    let currentTask = createTaskItem(tasks[i])

    ulTasks.appendChild(currentTask)
  }
}

function createTaskItem(object) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');


  li.classList.add('task__item');
  div.classList.add('task-info__container');
  span.classList.add('task-type');
  p.innerText = object.title;
  button.classList.add('task__button--remove-task');


  if (object.type === 'Urgente') {
    span.classList.add('span-urgent')
  }
  else if (object.type === 'Importante') {
    span.classList.add('span-important')
  }
  else {
    span.classList.add('span-normal')
  }

  button.addEventListener('click', function () {
    const index = tasks.indexOf(object);

    tasks.splice(index, 1);
    renderElements(tasks)
  })

  div.append(span, p)
  li.append(div, button)

  return li;
}

const form = document.querySelector('.form__container')

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputTitle = document.querySelector('#input_title');
  const selectType = document.querySelector('.form__input--priority');

  const newTask = {
    title: inputTitle.value,
    type: selectType.value,
  };

  tasks.push(newTask);
  renderElements(tasks);

  inputTitle.value = ''
  selectType.value = ''

});

renderElements(tasks);