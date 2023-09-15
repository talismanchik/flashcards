import { FC } from 'react'

import { Root, Indicator } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

import { Typography } from '@/components/ui/typography/typography'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  position?: 'left'
}

export const Checkbox: FC<CheckboxProps> = ({
  position,
  className,
  checked,
  onChange,
  label,
  disabled,
}) => {
  return (
    <div className={`${s.container} ${className}`}>
      <Typography
        variant={'body2'}
        as={'label'}
        className={`${s.label} ${disabled && s.disabled}`}
        htmlFor="c1"
      >
        <div
          className={`${s.buttonWrapper} ${disabled && s.disabled} ${
            position === 'left' && s.left
          }`}
        >
          <div></div>
          <Root
            className={s.root}
            disabled={disabled}
            defaultCheked
            //checked={checked}
            //onCheckedChange={onChange}
            id="c1"
          >
            <Indicator className={s.indicator}>
              <CheckIcon />
            </Indicator>
          </Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
