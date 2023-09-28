import { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/table/table.tsx'

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Table.Root {...args} />,
}
