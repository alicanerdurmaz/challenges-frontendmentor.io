import create from 'zustand'

export interface ITodo {
  id: string
  text: string
  completed: boolean
}

export type TodoStore = {
  todos: ITodo[]
  addTodo: (todo: ITodo) => void
  completeTodo: (id: string) => void
  removeTodo: (id: string) => void
  removeallCompletedTodos: () => void
  reorder: (...props: any) => void
}

const reorder = (todos: ITodo[], startIndex: number, endIndex: number) => {
  const result = Array.from(todos)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const useTodoStore = create<TodoStore>(
  (set): TodoStore => ({
    todos: initializeTodos(),

    addTodo: (todo: ITodo) => set(state => ({ todos: [...state.todos, todo] })),

    removeTodo: (id: string) => set(state => ({ ...state, todos: state.todos.filter(todo => todo.id !== id) })),

    removeallCompletedTodos: () =>
      set(state => ({ ...state, todos: state.todos.filter(todo => todo.completed === false) })),

    completeTodo: (id: string) =>
      set(state => ({
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = true
          }
          return todo
        }),
      })),

    reorder: (src: number, dest: number) =>
      set(state => ({
        todos: reorder(state.todos, src, dest),
      })),
  }),
)

export enum FILTERS {
  All = 1,
  Active,
  Completed,
}
export type FilterStore = {
  filter: FILTERS
  changeFilter: (filter: FILTERS) => void
}

export const useFilterStore = create<FilterStore>(
  (set, get): FilterStore => ({
    filter: FILTERS.All,
    changeFilter: (filter: FILTERS) => set(state => ({ ...state, filter: filter })),
  }),
)

export const filterTodoList = (todoList: ITodo[], filterType: FILTERS) => {
  switch (filterType) {
    case FILTERS.All:
      return todoList
    case FILTERS.Completed:
      return todoList.filter(todo => todo.completed === true)
    case FILTERS.Active:
      return todoList.filter(todo => todo.completed === false)
    default:
      return todoList
  }
}

function initializeTodos(): ITodo[] {
  return [
    { completed: true, text: 'Complete online JavaScript course', id: '1' },
    { completed: false, text: 'Jog around the park 3x', id: '2' },
    { completed: false, text: '10 minutes meditation', id: '3' },
    { completed: false, text: 'Read for 1 hour', id: '4' },
    { completed: false, text: 'Pick up groceries', id: '5' },
    { completed: false, text: 'Complete Todo App on Frontend Mentor', id: '6' },
    {
      completed: false,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed metus et dolor posuere imperdiet. Donec viverra porttitor pharetra. Proin maximus metus sodales auctor tincidunt. S',
      id: '7',
    },
  ]
}
