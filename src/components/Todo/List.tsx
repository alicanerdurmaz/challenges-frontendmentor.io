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
import { filterTodoList, useFilterStore, useTodoStore } from './TodoStore'

function List() {
  const filter = useFilterStore(state => state.filter)
  const todoList = useTodoStore(state => state.todos)
  const removeTodo = useTodoStore(state => state.removeTodo)
  const completeTodo = useTodoStore(state => state.completeTodo)
  const reorder = useTodoStore(state => state.reorder)

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    reorder(result.source.index, result.destination.index)
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
            {filterTodoList(todoList, filter).map((todo, index) => {
              return (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
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
                        shouldRender={todo.completed}
                        todo={todo}
                        removeTodo={() => removeTodo(todo.id)}
                        completeTodo={() => completeTodo(todo.id)}
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
