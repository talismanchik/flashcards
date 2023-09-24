import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import {
  Root,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  Group,
  Item,
  ItemText,
} from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

import ArrowDownIcon from '@/assets/icons/ArrowDownIcon'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon'

export type SelectProps = {
  disabled?: boolean
  open?: boolean
} & ComponentPropsWithoutRef<typeof Root>

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  ({ children, disabled, open, ...rest }, ref) => {
    const classNames = {
      selectElement: clsx(s.selectElement),
      label: clsx(disabled ? s.disabledLabel : ''),
      trigger: clsx(open && !disabled ? s.selectBlockOpen : s.selectBlock),
      icon: clsx(s.selectBlockIcon),
      content: clsx(s.selectContent),
      item: clsx(s.selectItem),
    }

    return (
      <div className={classNames.selectElement}>
        <label className={classNames.label}>{'Hi'}</label>
        <Root open={disabled ? false : open} {...rest}>
          <Trigger disabled={disabled} className={classNames.trigger} ref={ref}>
            <Value>Ok</Value>
            <Icon className={classNames.icon} asChild>
              {open && !disabled ? <ArrowUpIcon /> : <ArrowDownIcon disabled={disabled} />}
            </Icon>
          </Trigger>

          <Portal>
            <Content className={classNames.content}>
              <Group>
                <Item className={classNames.item} value={'1'}>
                  <ItemText>Select-box</ItemText>
                </Item>
                <Item className={classNames.item} value={'2'}>
                  <ItemText>Select-box</ItemText>
                </Item>
                <Item className={classNames.item} value={'3'}>
                  <ItemText>Select-box</ItemText>
                </Item>
              </Group>
            </Content>
          </Portal>
        </Root>
      </div>
    )
  }
)
