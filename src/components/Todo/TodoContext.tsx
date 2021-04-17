import { createContext, Dispatch, SetStateAction, useCallback, useContext, useMemo, useReducer, useState } from 'react'

const TodosCtx = createContext<ITodosCtx | null>(null)
const DispatchTodoStoreCtx = createContext<Dispatch<ITodoAction> | null>(null)

export enum FILTERS {
  All = 1,
  Active,
  Completed,
}

export const TodoCtxProvider: React.FC = ({ children }) => {
  const [todoList, dispatchTodoList] = useReducer(todoReducer, initialTodos)
  const [filter, setFilter] = useState(FILTERS.All)

  const getTodos = useCallback(() => {
    switch (filter) {
      case FILTERS.All:
        return todoList
      case FILTERS.Active:
        return todoList.filter(todo => todo.completed === false)
      case FILTERS.Completed:
        return todoList.filter(todo => todo.completed === true)
      default:
        return todoList
    }
  }, [filter, todoList])
  const filteredTodoList = useMemo(() => getTodos(), [filter, todoList])

  return (
    <TodosCtx.Provider value={{ todoList: filteredTodoList, filter, setFilter }}>
      <DispatchTodoStoreCtx.Provider value={dispatchTodoList}>{children}</DispatchTodoStoreCtx.Provider>
    </TodosCtx.Provider>
  )
}

interface ITodosCtx {
  filter: FILTERS
  todoList: ITodo[]
  setFilter: Dispatch<SetStateAction<FILTERS>>
}
export interface ITodo {
  id: number
  text: string
  completed: boolean
}
export interface ITodoAction {
  type: 'add' | 'removeAll' | 'remove' | 'removeAllCompleted' | 'complete' | 'reorder'
  payload?: ITodo[] | ITodo | number
}
function todoReducer(state: ITodo[], action: ITodoAction): ITodo[] {
  switch (action.type) {
    case 'add':
      return [...state, action.payload as ITodo]
    case 'removeAll':
      return []
    case 'remove':
      return state.filter(todo => todo.id !== action.payload)
    case 'removeAllCompleted':
      return state.filter(todo => todo.completed === false)
    case 'complete':
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = true
        }
        return todo
      })
    case 'reorder':
      return action.payload as ITodo[]
    default:
      console.error('todo reducer case on default')
      return state
  }
}

export const useTodoCtx = () => {
  const context = useContext(TodosCtx)
  if (!context || context === undefined) {
    throw new Error('TodosCtx must be used within a TodoCtxProvider')
  }

  return context
}

export const useDispatchTodoList = () => {
  const dispatch = useContext(DispatchTodoStoreCtx)

  if (!dispatch || dispatch === undefined) {
    throw new Error('TodosCtx must be used within a TodoCtxProvider')
  }

  const dispatchTodoList = useCallback(
    (obj: ITodoAction) => {
      return dispatch(obj)
    },
    [dispatch],
  )

  return dispatchTodoList
}

const initialTodos = [
  { completed: true, text: 'Complete online JavaScript course', id: 1 },
  { completed: false, text: 'Jog around the park 3x', id: 2 },
  { completed: false, text: '10 minutes meditation', id: 3 },
  { completed: false, text: 'Read for 1 hour', id: 4 },
  { completed: false, text: 'Pick up groceries', id: 5 },
  { completed: false, text: 'Complete Todo App on Frontend Mentor', id: 6 },
  {
    completed: false,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed metus et dolor posuere imperdiet. Donec viverra porttitor pharetra. Proin maximus metus sodales auctor tincidunt. S',
    id: 7,
  },
]
