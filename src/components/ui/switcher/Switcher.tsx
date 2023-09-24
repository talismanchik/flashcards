import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Root, List, Trigger } from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './Switcher.module.scss'

export type SwitcherProps = {} & ComponentPropsWithoutRef<typeof Root>

export const Switcher = forwardRef<ElementRef<typeof Root>, SwitcherProps>(
  ({ children, ...rest }, forwardRef) => {
    const classNames = {
      root: clsx(s.root),
      list: clsx(s.list),
      trigger: clsx(s.trigger),
    }

    return (
      <>
        <Root className={classNames.root} {...rest} ref={forwardRef}>
          <List className={classNames.list}>
            <Trigger className={classNames.trigger} value={'1'}>
              Switch
            </Trigger>
            <Trigger className={classNames.trigger} value={'3'}>
              Switch
            </Trigger>
            <Trigger disabled={true} className={classNames.trigger} value={'4'}>
              Switch
            </Trigger>
            <Trigger className={classNames.trigger} value={'5'}>
              Switch
            </Trigger>
          </List>
        </Root>
      </>
    )
  }
)
