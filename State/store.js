const addTodo = 'ADD-TODO';
const toggleDone = 'TOGGLE-DONE';
const toggleInput = 'TOGGLE-INPUT';

const store = {
    state: {
        todos: [{ text: 'test', key: 'key1', done: false }],
        showInput: false,
    },
    _callSubscriber() {
        console.log('bind me')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        let invertedShow;
        switch (action.type) {

            case addTodo:
                this.state.todos.push(action.todo);
                invertedShow = !this.state.showInput;
                this.state.showInput = invertedShow;
                // this._callSubscriber()
                break;
            case toggleDone:
                let index = this.state.todos.indexOf(action.todo)
                let temp = !this.state.todos[index].done //  по другому не работало
                this.state.todos[index].done = temp;
                // this._callSubscriber()
                break;
            case toggleInput:
                invertedShow = !this.state.showInput;
                this.state.showInput = invertedShow;
                break;
            default: break;
        }
        this._callSubscriber()
    },

}



export const addTodoActionCreator = (todo) => {
    return { type: addTodo, todo }
}

export const toggleDoneActionCreator = (todo) => {
    return { type: toggleDone, todo: todo }
}

export const toggleInputAC = () => {
    return { type: toggleInput }
}



export default store;