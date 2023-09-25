import { useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { Modal, ModalProps } from '@/components/ui/modal/Modal.tsx'
import { Typography } from '@/components/ui/typography/typography.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ModalStory = (args: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(args.open)

  useEffect(() => {
    setModalOpen(args.open)
  }, [args.open])

  return (
    <>
      <Button onClick={() => setModalOpen(true)}> Open</Button>
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <div>
          <Typography variant={'body1'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </Typography>
        </div>
      </Modal>
    </>
  )
}

export const ModalStoryRender: Story = {
  args: {
    title: 'Story',
    open: false,
  },
  render: (args: ModalProps) => <ModalStory {...args} />,
}
