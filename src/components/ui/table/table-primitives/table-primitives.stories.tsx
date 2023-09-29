import { Meta, StoryObj } from '@storybook/react'
import { CellContent } from './table-primitives'
import { Typography } from '@/components/ui/typography/typography.tsx'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.tsx'
import { Checkbox } from '@/components/ui/checkbox'
import EditIcon from '@/assets/icons/EditIcon.tsx'
import TrashIcon from '@/assets/icons/TrashIcon'
import PlayIcon from '@/assets/icons/PlayIcon.tsx'
import StarIcon from '@/assets/icons/StarIcon'

const meta = {
  title: 'Components/CellContent',
  component: CellContent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'columnName',
        'columnNameIcon',
        'cellText',
        'cellCheckboxText',
        'cellTextIcons',
        'cellIcons',
        'cellGrade',
        'cellPhotoText',
        'cellCheckbox',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CellContent>

export default meta
type Story = StoryObj<typeof meta>

export const ColumnName: Story = {
  args: {
    variant: 'columnName',
    children: <Typography variant={'subtitle2'}>{'Name'}</Typography>,
  },
}

export const ColumnNameIcon: Story = {
  args: {
    variant: 'columnNameIcon',
    children: (
      <>
        <Typography variant={'subtitle2'} title={'Name'}>
          {'Name'}
        </Typography>
        <ArrowUpIcon />
      </>
    ),
  },
}

export const CellText: Story = {
  args: {
    variant: 'cellText',
    children: <Typography variant={'body2'}>{'Hello'}</Typography>,
  },
}

export const CellCheckboxText: Story = {
  args: {
    variant: 'cellCheckboxText',
    children: (
      <>
        <Checkbox />
        <Typography variant={'body2'}>{'Hello'}</Typography>
      </>
    ),
  },
}

export const CellTextIcons: Story = {
  args: {
    variant: 'cellTextIcons',
    children: (
      <>
        <Typography variant={'body2'}>{'Hello'}</Typography>
        <EditIcon />
        <TrashIcon />
      </>
    ),
  },
}
export const CellIcons: Story = {
  args: {
    variant: 'cellIcons',
    children: (
      <>
        <PlayIcon />
        <EditIcon />
        <TrashIcon />
      </>
    ),
  },
}

export const CellGrade: Story = {
  args: {
    variant: 'cellGrade',
    children: (
      <>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </>
    ),
  },
}

export const CellPhotoText: Story = {
  args: {
    variant: 'cellPhotoText',
    children: (
      <>
        <img
          src={
            'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        />
        <Typography variant={'body2'}>{'Hello'}</Typography>
      </>
    ),
  },
}
export const CellCheckbox: Story = {
  args: {
    variant: 'cellCheckbox',
    children: <Checkbox />,
  },
}
