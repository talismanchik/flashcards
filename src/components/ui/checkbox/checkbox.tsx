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
}

export const Checkbox: FC<CheckboxProps> = ({ className, checked, onChange, label, disabled }) => {
  return (
    <div className={s.checkboxContainer}>
      <Root className={s.checkboxRoot} defaultChecked id="c1">
        <Indicator className={s.checkboxIndicator}>
          <CheckIcon />
        </Indicator>
      </Root>
      <Typography variant={'body2'} as={'label'} className={s.label} htmlFor="c1">
        {label}
      </Typography>
    </div>
  )
}
