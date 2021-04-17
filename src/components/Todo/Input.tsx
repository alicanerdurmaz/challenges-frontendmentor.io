import { useState } from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { useOnKeyDown } from '../../../src/hooks/useOnKeyDown'
import { useDispatchTodoList } from './TodoContext'

function Input() {
  const dispatchTodoList = useDispatchTodoList()
  const [text, setText] = useState('')

  useOnKeyDown({
    keyList: ['Enter'],
    action: () => addTodo(),
  })

  function addTodo() {
    dispatchTodoList({
      type: 'add',
      payload: {
        text: text,
        completed: false,
        id: Math.random(),
      },
    })
  }

  return (
    <div
      className={cn(
        styles.item,
        'mb-4 rounded-md border-transparent bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-900 ',
      )}
    >
      <button
        onClick={() => addTodo()}
        style={{ minWidth: '20px', minHeight: '20px' }}
        className="rounded-full border-gray-300 border ml-4"
      ></button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Create a new todo..."
        type="text"
        className={cn(
          styles.input,
          'w-full rounded-md focus:ring-purple-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:ring-0',
        )}
      ></input>
    </div>
  )
}

export default Input
