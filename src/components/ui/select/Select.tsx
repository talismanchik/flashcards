import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import s from './Select.module.scss'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon'

export type SelectProps = {
  disabled?: boolean
  open?: boolean
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  ({ children, disabled, open, ...rest }, ref) => {
    return (
      <div className={s.selectElement}>
        <label className={disabled ? s.disabledLabel : ''}>{'Hi'}</label>
        <SelectPrimitive.Root open={disabled ? false : open} {...rest}>
          <SelectPrimitive.Trigger
            disabled={disabled}
            className={open && !disabled ? s.selectBlockOpen : s.selectBlock}
            ref={ref}
          >
            <SelectPrimitive.Value>Ok</SelectPrimitive.Value>
            <SelectPrimitive.Icon className={s.selectBlockIcon} asChild>
              {open && !disabled ? <ArrowUpIcon /> : <ArrowDownIcon disabled={disabled} />}
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className={s.selectContent}>
              <SelectPrimitive.Group>
                <SelectPrimitive.Item className={s.selectItem} value={'1'}>
                  <SelectPrimitive.ItemText>Select-box</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item className={s.selectItem} value={'2'}>
                  <SelectPrimitive.ItemText>Select-box</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item className={s.selectItem} value={'3'}>
                  <SelectPrimitive.ItemText>Select-box</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              </SelectPrimitive.Group>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    )
  }
)
