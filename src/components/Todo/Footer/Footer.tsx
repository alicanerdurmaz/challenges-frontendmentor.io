import Filter from './Filter'
import styles from '../index.module.css'
import cn from 'classnames'

import ClearAll from './ClearAll'
import TodosLength from './TodosLength'
import { memo } from 'react'

function Footer() {
  return (
    <div className={cn(styles.footer, 'bg-white text-gray-500 dark:bg-gray-800')}>
      <TodosLength />
      <Filter />
      <ClearAll />
    </div>
  )
}

export default Footer
