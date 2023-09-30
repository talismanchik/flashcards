import { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/table/table.tsx'

import { Typography } from '@/components/ui/typography/typography.tsx'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.tsx'
import PlayIcon from '@/assets/icons/PlayIcon.tsx'
import EditIcon from '@/assets/icons/EditIcon.tsx'
import TrashIcon from '@/assets/icons/TrashIcon.tsx'

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const ArgForMap = [
  { Name: 'Pack Name', Cards: 4, LastUpdated: '18.03.2021', CreatedBy: 'Ivan Ivanov' },
  { Name: 'Pack Name', Cards: 4, LastUpdated: '18.03.2021', CreatedBy: 'Ivan Ivanov' },
  { Name: 'Pack Name', Cards: 4, LastUpdated: '18.03.2021', CreatedBy: 'Ivan Ivanov' },
  { Name: 'Pack Name', Cards: 4, LastUpdated: '18.03.2021', CreatedBy: 'Ivan Ivanov' },
  { Name: 'Pack Name', Cards: 4, LastUpdated: '18.03.2021', CreatedBy: 'Ivan Ivanov' },
]
export const Default: Story = {
  render: args => <Table.Root {...args} />,

  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell variant={'columnName'}>
              <Typography variant={'subtitle2'}>{'Name'}</Typography>
            </Table.HeadCell>
            <Table.HeadCell variant={'columnName'}>
              <Typography variant={'subtitle2'}>{'Cards'}</Typography>
            </Table.HeadCell>
            <Table.HeadCell variant={'columnNameIcon'}>
              <Typography variant={'subtitle2'}>{'Last Updated'}</Typography>
              <ArrowUpIcon />
            </Table.HeadCell>
            <Table.HeadCell variant={'columnName'}>
              <Typography variant={'subtitle2'}>{'Created by'}</Typography>
            </Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {ArgForMap.map(data => (
            <Table.Row>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.Name}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.Cards}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.LastUpdated}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.CreatedBy}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellIcons'}>
                <PlayIcon />
                <EditIcon />
                <TrashIcon />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}
