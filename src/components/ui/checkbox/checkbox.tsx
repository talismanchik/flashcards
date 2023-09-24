import { FC } from 'react'

import { Root, Indicator } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

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
  const classNames = {
    container: clsx(s.container, className),
    label: clsx(s.label, disabled && s.disabled),
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    root: clsx(s.root),
    indicator: clsx(s.indicator),
  }

  return (
    <div className={classNames.container}>
      <Typography variant={'body2'} as={'label'} className={classNames.label} htmlFor="c1">
        <div className={classNames.buttonWrapper}>
          <Root
            className={classNames.root}
            disabled={disabled}
            checked={checked}
            onCheckedChange={onChange}
            id="c1"
          >
            <Indicator className={classNames.indicator}>
              <CheckIcon />
            </Indicator>
          </Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
