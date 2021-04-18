import { useTodoStore } from '../TodoStore'

function TodosLength() {
  const todoListLength = useTodoStore(state => state.todos.length)
  return <div>{todoListLength} items left</div>
}

export default TodosLength
