import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './card.module.scss'

type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }, ref) => {
  return <div ref={ref} className={`${s.cardContainer} ${className}`} {...rest}></div>
})
