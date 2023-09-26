import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropdownItem.module.scss'

import { Typography } from '@/components/ui/typography/typography.tsx'

export type DropdownItemProps = {
  children?: ReactNode
  onSelect?: (event: Event) => void
} & ComponentPropsWithoutRef<typeof Item>

export const DropdownItem = forwardRef<ElementRef<typeof Item>, DropdownItemProps>(
  ({ children }, forwardRef) => {
    const classNames = {
      item: clsx(s.item),
      itemIcon: clsx(s.itemIcon),
    }

    return (
      <Item ref={forwardRef} className={classNames.item} asChild>
        {children}
      </Item>
    )
  }
)

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  label: string
} & ComponentPropsWithoutRef<typeof Item>

export const DropdownItemWithIcon = forwardRef<ElementRef<typeof Item>, DropdownItemWithIconProps>(
  ({ icon, label }, forwardRef) => {
    const classNames = {
      item: clsx(s.item),
      itemIcon: clsx(s.itemIcon),
      separator: clsx(s.separator),
    }

    return (
      <Item ref={forwardRef} className={classNames.item} asChild>
        <div>
          <div className={classNames.itemIcon}>{icon}</div>
          <Typography variant={'caption'} as={'label'}>
            {label}
          </Typography>
        </div>
      </Item>
    )
  }
)
