import { ReactNode } from 'react'

type textType = {
  weight: number
  size: number
  color: string
  className?: string
  children: ReactNode
}

const Text = ({ weight, size, color, className, children }: textType) => {
  return (
    <p
      className={className +' font-mono'}
      style={{ fontSize: size, fontWeight: weight, color: color }}
    >
      {children}
    </p>
  )
}

export default Text