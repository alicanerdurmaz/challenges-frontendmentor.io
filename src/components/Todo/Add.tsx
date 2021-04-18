import { useState } from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { useOnKeyDown } from '../../hooks/useOnKeyDown'
import { useTodoStore } from './TodoStore'
import { v4 as uuidv4 } from 'uuid'

function Add() {
  const addTodo = useTodoStore(state => state.addTodo)
  const [text, setText] = useState('')

  useOnKeyDown({
    keyList: ['Enter'],
    action: () => submitHandler(),
  })

  function submitHandler() {
    addTodo({
      text: text,
      completed: false,
      id: uuidv4(),
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
        onClick={() => submitHandler()}
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

export default Add
