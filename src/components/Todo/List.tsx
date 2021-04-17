import { ITodo, useDispatchTodoList, useTodoCtx } from './TodoContext'
import Item from './Item'
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd'
import cn from 'classnames'
import styles from './index.module.css'

const reorder = (list: ITodo[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function List() {
  const { todoList } = useTodoCtx()
  const dispatchTodoList = useDispatchTodoList()

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const newTodoList = reorder(todoList, result.source.index, result.destination.index)
    dispatchTodoList({
      type: 'reorder',
      payload: newTodoList,
    })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided: DroppableProvided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="max-h-390 todo-scrollbar overflow-y-auto rounded-tl-lg rounded-tr-lg bg-gray-200 dark:bg-gray-700"
          >
            {todoList.map((todo, index) => {
              return (
                <Draggable key={todo.id.toString()} draggableId={todo.id.toString()} index={index}>
                  {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                    <li
                      className={cn(
                        styles.item,
                        'bg-white dark:bg-gray-800 dark:border-gray-700',
                        snapshot.isDragging && 'shadow-2xl rounded-lg dark:border-gray-900 border-2',
                      )}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Item
                        todo={todo}
                        removeTodo={() =>
                          dispatchTodoList({
                            type: 'remove',
                            payload: todo.id,
                          })
                        }
                        completeTodo={() =>
                          dispatchTodoList({
                            type: 'complete',
                            payload: todo.id,
                          })
                        }
                      ></Item>
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default List
