import React, { memo } from 'react'

interface IProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button = ({ children, onClick, className }: IProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

function areEqual(prevProps: IProps, nextProps: IProps) {
  return true
}
const MemoButton = memo(Button, areEqual)
export default MemoButton
