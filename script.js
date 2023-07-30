function Todo() {
    const button = document.querySelector('#button');
    const todoItems = document.querySelector('#todoItems');
    const pItems = document.getElementsByClassName('todoList');
    
    function todoListCreate() {
        const todoValue = document.querySelector('#todoValue');
        const error = document.querySelector('.error');
        const todo = document.querySelector('.todo');
        
        if (!todoValue.value.trim()) {
            error.style.display = 'block';
            setTimeout(() => {
                error.style.display = 'none';
            },2000);
            return;
        } else {
            error.style.display = 'none';
        }

        let p = document.createElement('p');
        p.className = 'todoList';
        p.innerText = todoValue.value;
        let span = document.createElement('span');
        span.classList.add('remove');
        span.innerText = 'X';
        p.appendChild(span);
        todo.appendChild(p);
        todoValue.value = '';

        span.onclick = function () {
            this.parentElement.remove();
            if (!pItems.length) {
                todoItems.innerText = ``;
            } else {
                todoItems.innerText = `You have ${pItems.length} Items`;
            }
        }
        todoItems.innerText = `You have ${pItems.length} Items`;

    }
    button.addEventListener('click', todoListCreate);
};

const todo = new Todo();