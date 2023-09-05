import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}
