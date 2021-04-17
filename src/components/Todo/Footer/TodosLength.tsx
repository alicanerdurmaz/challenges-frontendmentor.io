import { useTodoCtx } from '../TodoContext'

function TodosLength() {
  const { todoList } = useTodoCtx()
  return <div>{todoList.length} items left</div>
}

export default TodosLength
