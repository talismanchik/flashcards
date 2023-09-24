import { Meta, StoryObj } from '@storybook/react'

import { Switcher } from '@/components/ui/switcher/Switcher.tsx'

const meta = {
  title: 'Components/Switcher',
  component: Switcher,
  tags: ['autodocs'],
} satisfies Meta<typeof Switcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
