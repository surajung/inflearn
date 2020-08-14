
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

const state = {
  todoItems: storage.fetch()
};

const getters = {
  sotredTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },
  toggleOneItem(state, payload) {
    // payload.todoItem.completed = !payload.todoItem.completed;  // 인자로 받은 todoItem값의 complete 갱신
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed  // 인자로 받은 index값을 통해 state 안의 todoItem 배열을 접근해서 complete 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },
  clearAllItem(state) {
    localStorage.clear();
    state.todoItems = [];
  }
}

export default {
  state,
  getters,
  mutations
}