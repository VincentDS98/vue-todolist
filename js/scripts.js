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
        addTodo(){
            if(this.newTodo>0){
                const newTodoObj = {
                text: this.newTodo,
                done: false
            };
            }
            

            this.todos.push(newTodoObj);
        },
        removeTodo(index){
            this.todos.splice(index, 1);
        }
    }
}).mount('#app');