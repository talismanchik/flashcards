import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import { Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './Dropdown.module.scss'

export type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  align?: 'start' | 'center' | 'end'
} & ComponentPropsWithoutRef<typeof Root>
export const Dropdown = forwardRef<ElementRef<typeof Root>, DropdownProps>(
  ({ children, trigger }, forwardRef) => {
    const classNames = {
      content: clsx(s.content),
      arrow: clsx(s.arrow),
      separator: clsx(s.separator),
    }

    const [open, setOpen] = useState(false)

    return (
      <Root open={open} onOpenChange={setOpen}>
        <Trigger asChild>{trigger ?? <button></button>}</Trigger>
        <Portal forceMount>
          <Content asChild forceMount className={classNames.content} ref={forwardRef}>
            <>
              {children}
              <Arrow className={classNames.arrow} />
            </>
          </Content>
        </Portal>
      </Root>
    )
  }
)
