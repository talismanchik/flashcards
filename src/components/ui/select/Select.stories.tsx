import { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components/ui/select/Select.tsx'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    open: false,
  },
}
