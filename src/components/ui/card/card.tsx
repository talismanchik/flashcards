import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }, ref) => {
  const classNames = {
    cardContainer: clsx(s.cardContainer, className),
  }

  return <div ref={ref} className={classNames.cardContainer} {...rest}></div>
})
