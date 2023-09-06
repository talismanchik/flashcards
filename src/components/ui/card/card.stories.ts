import { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Card1: Story = {
  args: {
    children: '',
  },
}
