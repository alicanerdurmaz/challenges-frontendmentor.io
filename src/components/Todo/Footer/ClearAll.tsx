import { useTodoStore } from '../TodoStore'

function ClearAll() {
  const removeallCompletedTodos = useTodoStore(state => state.removeallCompletedTodos)
  return <button onClick={() => removeallCompletedTodos()}>Clear Completed</button>
}

export default ClearAll
