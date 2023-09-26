import { ComponentPropsWithoutRef } from 'react'

import { Item, Indicator } from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioItem.module.scss'

import { Typography } from '@/components/ui/typography/typography.tsx'

export type RadioItemType = {
  label: string
} & ComponentPropsWithoutRef<typeof Item>

export const RadioItem = ({ label, disabled, value }: RadioItemType) => {
  const classNames = {
    label: clsx(s.label, disabled && s.disabled),
    indicator: clsx(s.indicator),
    item: clsx(s.item),
  }

  return (
    <Typography className={classNames.label} variant={'body2'} as="label">
      <Item value={value} className={classNames.item} disabled={disabled}>
        <Indicator className={classNames.indicator} />
      </Item>
      <label>{label}</label>
    </Typography>
  )
}
