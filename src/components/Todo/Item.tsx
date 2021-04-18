import Checkbox from './Checkbox'
import Button from './Button'
import { VscChromeClose } from '@react-icons/all-files/vsc/VscChromeClose'
import { ITodo } from './TodoStore'
import { memo } from 'react'

interface IProps {
  todo: ITodo
  removeTodo: (id: string) => void
  completeTodo: (id: string) => void
  shouldRender: boolean
}

function Item({ todo, completeTodo, removeTodo }: IProps) {
  return (
    <>
      <Checkbox label={todo.text} checked={todo.completed} onChange={() => completeTodo(todo.id)} />
      <Button className="ml-auto mr-4 text-gray-400 dark:text-gray-600" onClick={() => removeTodo(todo.id)}>
        <VscChromeClose />
      </Button>
    </>
  )
}

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  return prevProps.shouldRender === nextProps.shouldRender
}
export default memo(Item, areEqual)
