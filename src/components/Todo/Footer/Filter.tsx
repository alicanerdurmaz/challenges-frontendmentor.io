import cn from 'classnames'
import styles from '../index.module.css'
import { FILTERS, useTodoCtx } from '../TodoContext'

function Filter() {
  const { filter, setFilter } = useTodoCtx()

  function isActive(filterType: number) {
    return filterType === filter ? 'text-blue-600' : ''
  }

  return (
    <div className={cn(styles.filterContainer)}>
      <button onClick={() => setFilter(FILTERS.All)} className={cn(styles.filterButtons, isActive(FILTERS.All))}>
        All
      </button>
      <button onClick={() => setFilter(FILTERS.Active)} className={cn(styles.filterButtons, isActive(FILTERS.Active))}>
        Active
      </button>
      <button
        onClick={() => setFilter(FILTERS.Completed)}
        className={cn(styles.filterButtons, isActive(FILTERS.Completed))}
      >
        Completed
      </button>
    </div>
  )
}

export default Filter
