
// Função para adicionar uma nova tarefa
function addTask() {
    // Obtém o título da tarefa a partir do campo de entrada
    const taskTitle = document.querySelector('#task-title').value;

    // Verifica se o título da tarefa não está vazio
    if (taskTitle) {
        // Clona o template da tarefa
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        // Adiciona o título à nova tarefa
        newTask.querySelector('.task-title').textContent = taskTitle;

        // Remove classes desnecessárias do novo elemento
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // Adiciona a nova tarefa à lista de tarefas
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // Adicionar evento de remover tarefa da lista de tarefas
        const removeBtn = newTask.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function () {
            removeTask(this);
        });

        // Adicionar evento de completar tarefa da lista de tarefas
        const doneBtn = newTask.querySelector('.done-btn');
        doneBtn.addEventListener('click', function () {
            completeTask(this);
        });

        // Limpar o campo de entrada
        document.querySelector('#task-title').value = '';
    }
}

// Função de remover tarefa
function removeTask(task) {
    // Remove o elemento pai do botão clicado (a tarefa)
    task.parentNode.remove();
}

// Função de completar tarefa
function completeTask(task) {
    // Alterna a classe 'done' no elemento pai do botão clicado (a tarefa)
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done');
}

// Evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
    // Previne o comportamento padrão do botão de envio do formulário
    e.preventDefault();

    // Chama a função para adicionar a tarefa
    addTask();
});
