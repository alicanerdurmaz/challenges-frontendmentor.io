import { useEffect } from 'react'

interface IProps {
  keyList: string[]
  action: () => void
}
export function useOnKeyDown({ keyList, action }: IProps) {
  useEffect(() => {
    window.addEventListener('keydown', keydownHandler)
    return () => {
      window.removeEventListener('keydown', keydownHandler)
    }
    function keydownHandler(e: KeyboardEvent) {
      if (keyList.includes(e.key)) {
        action()
      }
    }
  }, [keyList, action])
}
