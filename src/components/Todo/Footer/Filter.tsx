import cn from 'classnames'
import styles from '../index.module.css'
import { FILTERS, useFilterStore } from '../TodoStore'

function Filter() {
  const changeFilter = useFilterStore(state => state.changeFilter)
  const filter = useFilterStore(state => state.filter)

  function isActive(filterType: number) {
    return filterType === filter ? 'text-blue-600' : ''
  }

  return (
    <div className={cn(styles.filterContainer)}>
      <button onClick={() => changeFilter(FILTERS.All)} className={cn(styles.filterButtons, isActive(FILTERS.All))}>
        All
      </button>
      <button
        onClick={() => changeFilter(FILTERS.Active)}
        className={cn(styles.filterButtons, isActive(FILTERS.Active))}
      >
        Active
      </button>
      <button
        onClick={() => changeFilter(FILTERS.Completed)}
        className={cn(styles.filterButtons, isActive(FILTERS.Completed))}
      >
        Completed
      </button>
    </div>
  )
}

export default Filter
