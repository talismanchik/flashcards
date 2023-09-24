import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SwitcherPrimitive from '@radix-ui/react-tabs'

import s from './Switcher.module.scss'

export type SwitcherProps = {} & ComponentPropsWithoutRef<typeof SwitcherPrimitive.Root>

export const Switcher = forwardRef<ElementRef<typeof SwitcherPrimitive.Root>, SwitcherProps>(
  ({ children, ...rest }, forwardRef) => {
    return (
      <>
        <SwitcherPrimitive.Root className={s.root} {...rest} ref={forwardRef}>
          <SwitcherPrimitive.List className={s.list}>
            <SwitcherPrimitive.Trigger className={s.trigger} value={'1'}>
              Switch
            </SwitcherPrimitive.Trigger>
            <SwitcherPrimitive.Trigger className={s.trigger} value={'3'}>
              Switch
            </SwitcherPrimitive.Trigger>
            <SwitcherPrimitive.Trigger disabled={true} className={s.trigger} value={'4'}>
              Switch
            </SwitcherPrimitive.Trigger>
            <SwitcherPrimitive.Trigger className={s.trigger} value={'5'}>
              Switch
            </SwitcherPrimitive.Trigger>
          </SwitcherPrimitive.List>
        </SwitcherPrimitive.Root>
      </>
    )
  }
)
