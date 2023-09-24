import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Root } from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'
import { RadioItem, RadioItemType } from './RadioItem/RadioItem'

type RadioGroupProps = {
  radioGroupItems: RadioItemType[]
} & ComponentPropsWithoutRef<typeof Root>

export const RadioGroup = forwardRef<ElementRef<typeof Root>, RadioGroupProps>(
  ({ radioGroupItems, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root),
    }

    return (
      <Root ref={ref} className={classNames.root} {...rest}>
        {radioGroupItems.map(item => (
          <RadioItem key={item.label} {...item} />
        ))}
      </Root>
    )
  }
)
