import { useDispatchTodoList } from '../TodoContext'

function ClearAll() {
  const dispatchTodoList = useDispatchTodoList()
  return <button onClick={() => dispatchTodoList({ type: 'removeAllCompleted' })}>Clear Completed</button>
}

export default ClearAll
