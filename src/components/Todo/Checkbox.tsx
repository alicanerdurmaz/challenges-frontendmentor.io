import cn from 'classnames'
import { memo } from 'react'
import styles from './index.module.css'
interface IProps {
  label: string
  checked: boolean
  onChange?: () => void
}

function Checkbox({ label, onChange, checked }: IProps) {
  return (
    <>
      <label className={cn(styles.input, 'w-11/12')}>
        <input
          disabled={checked}
          checked={checked}
          onChange={onChange}
          type="checkbox"
          className="rounded-full w-5 h-5 bg-transparent border-gray-300 dark:border-gray-700 focus:ring-transparent focus:border-purple-600 focus-visible:ring-offset-purple-500 checked:bg-gradient-to-br from-blue-300 to-purple-600 cursor-pointer hover:border-purple-400"
        />
        <p
          className={`ml-4 h-full w-full truncate 
          ${checked ? 'line-through text-gray-400 dark:text-gray-600' : 'dark:text-gray-300'}`}
        >
          {label}
        </p>
      </label>
      <style jsx>{`
        input[type='checkbox']:checked:after {
          content: ' ';
          display: block;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
        }
      `}</style>
    </>
  )
}

function areEqual(prevProps: IProps, nextProps: IProps) {
  return prevProps.checked === nextProps.checked
}
export default memo(Checkbox, areEqual)
