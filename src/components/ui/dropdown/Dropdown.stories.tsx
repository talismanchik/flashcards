import { Meta, StoryObj } from '@storybook/react'

import EditIcon from '@/assets/icons/EditIcon.tsx'
import LogOutIcon from '@/assets/icons/LogOutIcon.tsx'
import PersonIcon from '@/assets/icons/PersonIcon.tsx'
import PlayIcon from '@/assets/icons/PlayIcon.tsx'
import TrashIcon from '@/assets/icons/TrashIcon'
import { Dropdown } from '@/components/ui/dropdown/Dropdown.tsx'
import { DropdownWithAvatar } from '@/components/ui/dropdown/dropdownAvatar/DropdownAvatar.tsx'
import {
  DropdownItem,
  DropdownItemWithIcon,
} from '@/components/ui/dropdown/dropdownItem/DropdownItems.tsx'

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

export const WithAvatar: Story = {
  args: {
    children: (
      <>
        <DropdownItem>
          <DropdownWithAvatar
            name={'Ivan'}
            mail={'IvanMain@gmail.com'}
            avatar={'https://ionicframework.com/docs/img/demos/avatar.svg'}
          />
        </DropdownItem>
        <DropdownItemWithIcon icon={<PersonIcon />} label={'My Profile'} />
        <DropdownItemWithIcon icon={<LogOutIcon />} label={'Sign Out'} />
      </>
    ),
  },
}
