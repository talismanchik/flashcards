import { ComponentProps, FC } from 'react'
import { clsx } from 'clsx'
import { Typography } from '@/components/ui/typography/typography.tsx'

import s from './table-primitives.module.scss'

export type CellPropsType = ComponentProps<'div'>
export const ColumnName: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    columnName: clsx(className, s.columnName),
  }

  return <Typography className={classNames.columnName} />
}

export const ColumnNameWithIcon: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    columnNameWithIcon: clsx(className, s.columnNameWithIcon),
  }

  return <Typography className={classNames.columnNameWithIcon} />
}

export const ColumnContent: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnContent: clsx(className, s.ColumnContent),
  }

  return <Typography className={classNames.ColumnContent} />
}

export const ColumnContentWithCheckBox: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnContentWithCheckBox: clsx(className, s.ColumnContentWithCheckBox),
  }

  return <Typography className={classNames.ColumnContentWithCheckBox} />
}

export const ColumnContentWithIcons: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnContentWithIcons: clsx(className, s.ColumnContentWithIcons),
  }

  return <Typography className={classNames.ColumnContentWithIcons} />
}

export const ColumnContentIcons: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnContentIcons: clsx(className, s.ColumnContentIcons),
  }

  return <div className={classNames.ColumnContentIcons}></div>
}

export const ColumnGrade: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnGrade: clsx(className, s.ColumnGrade),
  }

  return <div className={classNames.ColumnGrade}></div>
}

export const ColumnContentWithPhoto: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnContentWithPhoto: clsx(className, s.ColumnContentWithIcons),
  }

  return <Typography className={classNames.ColumnContentWithPhoto} />
}

export const ColumnCheckbox: FC<CellPropsType> = ({ className }) => {
  const classNames = {
    ColumnCheckbox: clsx(className, s.ColumnCheckbox),
  }

  return <Typography className={classNames.ColumnCheckbox} />
}
