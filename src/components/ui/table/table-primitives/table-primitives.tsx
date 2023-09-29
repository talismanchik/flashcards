import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'

import s from './table-primitives.module.scss'

export type CellContentProps = {
  children?: ReactNode
  variant?:
    | 'columnName'
    | 'columnNameIcon'
    | 'cellText'
    | 'cellCheckboxText'
    | 'cellTextIcons'
    | 'cellIcons'
    | 'cellGrade'
    | 'cellPhotoText'
    | 'cellCheckbox'
} & ComponentPropsWithoutRef<'div'>

export const CellContent = forwardRef<HTMLDivElement, CellContentProps>(
  ({ variant = 'cellText', className, ...rest }, ref) => {
    const classNames = {
      root: clsx(s[variant], className),
    }

    return <div className={classNames.root} ref={ref} {...rest} />
  }
)
