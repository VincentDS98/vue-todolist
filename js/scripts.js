const {createapp} = Vue;


createapp({
    data() {
        return {
            newTodo: '',
            todos: [
                {
                    text: 'Mangiare',
                    done: true,
                },
                {
                    text: 'Dormire',
                    done: false,
                },
                {
                    text: 'Respirare',
                    done: true,
                },
            ]

            
        };
    },
    methods: {
        addTodo(newTask){
            const newTodoObj = {
                text: newTask,
                done: false
            };

            this.todos.push(newTodoObj);
        },
        removeTodo(index){
            this.todos.splice(index, 1);
        }
    }
}).mount('#app');