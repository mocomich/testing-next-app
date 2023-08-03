import { StoryObj, Meta } from '@storybook/react'

import { AnchorButton } from '.'

const meta: Meta<typeof AnchorButton> = {
  title: `ui-elements/AnchorButton`,
  component: AnchorButton,
}

export default meta

type Story = StoryObj<typeof AnchorButton>

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'AnchorButton',
  },
}

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'AnchorButton',
  },
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'AnchorButton',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'AnchorButton',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'AnchorButton',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'AnchorButton',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'AnchorButton',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'AnchorButton',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'AnchorButton',
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'AnchorButton',
  },
}
