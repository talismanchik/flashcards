import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './card.module.scss'

type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  return <div className={`${s.cardContainer} ${className}`}></div>
})
