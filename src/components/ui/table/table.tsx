import { ComponentProps, ComponentPropsWithoutRef, FC, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>
export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export type HeadCellProps = {
  children?: ReactNode
  variant?: 'columnName' | 'columnNameIcon'
} & ComponentPropsWithoutRef<'th'>

export const HeadCell = forwardRef<HTMLTableCellElement, HeadCellProps>(
  ({ children, variant = 'columnName', className, ...rest }, ref) => {
    const classNames = {
      headCell: clsx(s.headCell, className),
      container: clsx(s[variant]),
    }

    return (
      <th className={classNames.headCell} ref={ref} {...rest}>
        <div className={classNames.container}>{children}</div>
      </th>
    )
  }
)

export type CellProps = {
  children?: ReactNode
  variant?:
    | 'cellText'
    | 'cellCheckboxText'
    | 'cellTextIcons'
    | 'cellIcons'
    | 'cellGrade'
    | 'cellPhotoText'
    | 'cellCheckbox'
} & ComponentProps<'td'>

export const Cell = forwardRef<HTMLTableCellElement, CellProps>(
  ({ children, variant = 'cellText', className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(s.tableCell, className),
      container: clsx(s[variant]),
    }

    return (
      <td className={classNames.cell} ref={ref} {...rest}>
        <div className={classNames.container}>{children}</div>
      </td>
    )
  }
)

export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
}
