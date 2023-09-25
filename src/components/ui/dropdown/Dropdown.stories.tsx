import { Meta, StoryObj } from '@storybook/react'

import EditIcon from '@/assets/icons/EditIcon.tsx'
import PlayIcon from '@/assets/icons/PlayIcon.tsx'
import TrashIcon from '@/assets/icons/TrashIcon'
import { Dropdown } from '@/components/ui/dropdown/Dropdown.tsx'
import { DropdownItemWithIcon } from '@/components/ui/dropdown/dropdownItem/DropdownItems.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<PlayIcon />} label={'Learn'} />
        <DropdownItemWithIcon icon={<EditIcon />} label={'Edit'} />
        <DropdownItemWithIcon icon={<TrashIcon />} label={'Delete'} />
      </>
    ),
  },
}
