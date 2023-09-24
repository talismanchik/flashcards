import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/radioGroup/RadioGroup.tsx'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const storyRadioGroupItems = [
  { value: '1', label: 'first', disabled: true },
  { value: '2', label: 'second', disabled: false },
  { value: '3', label: 'third', disabled: false },
]

export const Default: Story = {
  args: {
    radioGroupItems: storyRadioGroupItems,
  },
}
