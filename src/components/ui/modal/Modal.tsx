import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import { Root, Portal, Content, Close } from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

import CloseIcon from '@/assets/icons/CloseIcon.tsx'
import { Card } from '@/components/ui/card/card.tsx'
import { Typography } from '@/components/ui/typography/typography.tsx'

export type ModalProps = {
  title?: string
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
} & ComponentPropsWithoutRef<typeof Root>

export const Modal = forwardRef<ElementRef<typeof Root>, ModalProps>(
  ({ title, children, open, setOpen, ...rest }, ref) => {
    const classNames = {
      content: clsx(s.content),
      header: clsx(s.header),
      close: clsx(s.close),
    }

    return (
      <Root open={open} onOpenChange={setOpen}>
        {open && (
          <Portal forceMount>
            <div ref={ref} {...rest}>
              <Content className={classNames.content} forceMount>
                <Card>
                  <div className={classNames.header}>
                    <Typography variant={'h2'}>{title}</Typography>
                    <Close className={classNames.close} asChild>
                      <CloseIcon />
                    </Close>
                  </div>
                  <div>{children}</div>
                </Card>
              </Content>
            </div>
          </Portal>
        )}
      </Root>
    )
  }
)
