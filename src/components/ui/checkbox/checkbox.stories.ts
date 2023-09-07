import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxWithLabel: Story = {
  args: {
    label: 'Click here',
    disabled: false,
  },
}
export const CheckboxWithoutLabel: Story = {
  args: {
    label: '',
    disabled: false,
  },
}
