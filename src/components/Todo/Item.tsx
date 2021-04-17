import Checkbox from './Checkbox'
import { ITodo } from './TodoContext'
import styles from './index.module.css'
import { memo } from 'react'
import Button from './Button'
import { VscChromeClose } from '@react-icons/all-files/vsc/VscChromeClose'
import cn from 'classnames'

interface IProps {
  todo: ITodo
  removeTodo: (id: number) => void
  completeTodo: (id: number) => void
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

export default Item
