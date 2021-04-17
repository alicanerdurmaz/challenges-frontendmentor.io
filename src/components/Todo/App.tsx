import styles from 'src/components/Todo/index.module.css'
import cn from 'classnames'
import Header from './Header'
import { TodoCtxProvider } from './TodoContext'
import Todo from './Todo'

function App() {
  return (
    <div className={cn(styles.page, 'bg-gray-100 dark:bg-gray-900')}>
      <div className="w-350 md:w-550 px-2 md:px-0">
        <Header />
        <TodoCtxProvider>
          <Todo />
        </TodoCtxProvider>
      </div>
      <p className="mt-24 text-gray-600 dark:text-gray-600">Drag and drop to reorder list</p>
    </div>
  )
}

export default App
