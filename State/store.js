const addTodo = 'ADD-TODO';
const toggleDone = 'TOGGLE-DONE';
const toggleInput = 'TOGGLE-INPUT';
const changeTheme = 'CHANGE-THEME';

const store = {
    state: {
        todos: [{ text: 'test', key: 'key1', done: false }],
        showInput: false,
        isLightTheme: true, 
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
                // this.state.todos.push(action.todo);
                this.state.todos = [action.todo, ...this.state.todos];
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
            case changeTheme:
                let newTheme = !this.state.isLightTheme;
                this.state.isLightTheme = newTheme;
            default: break;
        }
        this._callSubscriber()
    },

}

export const changeThemeAC = () => {
    return {type: changeTheme}
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