
window.onload = lst;

function lst () {
  localStorage.setItem('task', {});
  localStorage.setItem('count', 0);
}

// Input del formulario
const inp_info = document.querySelector('#inp_info');

// Boton de agregar tarea
const btn_agree = document.querySelector('#btn_agree');

// Contenedor de tareas
const deposit_tasks = document.querySelector('#deposit_tasks');

// Arreglo donde se almacen las tareas en objetos
var tasks = [];
var count = 0;

// Dandole una evento al boton de agregar tareas
btn_agree.addEventListener('click', (e) => {

  e.preventDefault();

  let inf = inp_info.value;

  if (inf == '') {

    alert('Write a task please');

  }
  else {

    // Llamamos a la funcion de guardar tarea
    save_task(inf);

    inp_info.value = '';

    count = count + 1;
    count_tasks (count);
    localStorage.setItem('count', count);

  }

});

const save_task = inf => {

  let id = Math.floor(Math.random() * 999999);

  let obj = {
    id: id,
    content: inf
  }

  tasks.push(obj);

  localStorage.setItem('task', JSON.stringify(tasks));

  view_tasks();

};

const view_tasks = () => {

  let div;

  for (let i = 0; i < tasks.length; i++) {

    div = document.createElement('div');
    let _id = tasks[i].id;

    let btn_x = document.createElement('div');
    let text = document.createElement('p');

    // Le damos estilo con boostrap y un id unico
    div.classList.add('p-3');
    div.classList.add('bg-dark');
    div.classList.add('mb-3');
    div.classList.add('d-flex')
    div.classList.add('align-items-center')
    div.classList.add('justify-content-between')
    div.setAttribute('id', _id);

    // Le damos un toques a los componenetes
    text.textContent = tasks[i].content;
    text.classList.add('m-0');
    text.style.color = '#fff';

    btn_x.textContent = 'X';
    btn_x.classList.add('py-1');
    btn_x.classList.add('px-2');
    btn_x.classList.add('bg-danger');
    btn_x.style.cursor = 'pointer';
    btn_x.style.color = '#fff';
    btn_x.setAttribute('id', 'btn_x');
    btn_x.setAttribute('onclick', `delete_task(${_id});`);

    // Le agregamos los componentes al div padre
    div.appendChild(text);
    div.appendChild(btn_x);

  }

  // Mostramos las tareas en el div del HTML
  deposit_tasks.appendChild(div);

};

function delete_task (_id) {

  let index

  var element = document.getElementById(`${_id}`);
  deposit_tasks.removeChild(element);

  count = count - 1;
  count_tasks (count);

  for (let i = 0; i < tasks.length; i++) {

    if (tasks[i].id == _id) {

      index = i;

    }

  }

  tasks.splice(index, 1);
  
  localStorage.setItem('task', JSON.stringify(tasks));

}

function count_tasks (count) {
  
  document.querySelector('#task').textContent = `Tasks: ${count}`;
  localStorage.setItem('count', count);
  
}

function add_local () {

  count = parseInt(localStorage.getItem('count'));
  tasks = JSON.parse(localStorage.getItem('task'))
  
  let div;

  for (let i = 0; i < tasks.length; i++) {

    div = document.createElement('div');
    let _id = tasks[i].id;

    let btn_x = document.createElement('div');
    let text = document.createElement('p');

    // Le damos estilo con boostrap y un id unico
    div.classList.add('p-3');
    div.classList.add('bg-dark');
    div.classList.add('mb-3');
    div.classList.add('d-flex')
    div.classList.add('align-items-center')
    div.classList.add('justify-content-between')
    div.setAttribute('id', _id);

    // Le damos un toques a los componenetes
    text.textContent = tasks[i].content;
    text.classList.add('m-0');
    text.style.color = '#fff';

    btn_x.textContent = 'X';
    btn_x.classList.add('py-1');
    btn_x.classList.add('px-2');
    btn_x.classList.add('bg-danger');
    btn_x.style.cursor = 'pointer';
    btn_x.style.color = '#fff';
    btn_x.setAttribute('id', 'btn_x');
    btn_x.setAttribute('onclick', `delete_task(${_id});`);

    // Le agregamos los componentes al div padre
    div.appendChild(text);
    div.appendChild(btn_x);

    deposit_tasks.appendChild(div);

  }

}

count_tasks (count);
add_local ();
count_tasks (count);