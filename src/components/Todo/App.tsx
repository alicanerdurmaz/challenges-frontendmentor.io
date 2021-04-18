import styles from 'src/components/Todo/index.module.css'
import cn from 'classnames'
import Header from './Header'
import React from 'react'
import List from './List'
import Footer from './Footer/Footer'
import Add from './Add'

function App() {
  return (
    <div className={cn(styles.page, 'bg-gray-100 dark:bg-gray-900')}>
      <div className="w-350 md:w-550 px-2 md:px-0">
        <Header />
        <div className="rounded-lg relative shadow-xl">
          <Add />
          <List />
          <Footer />
        </div>
      </div>
      <p className="mt-24 text-gray-600 dark:text-gray-600">Drag and drop to reorder list</p>
    </div>
  )
}

export default App
