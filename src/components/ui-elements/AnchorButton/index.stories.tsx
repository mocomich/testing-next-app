import { StoryObj, Meta } from '@storybook/react'

import { AnchorButton } from '.'

const meta: Meta<typeof AnchorButton> = {
  title: 'ui-elements/AnchorButton',
  component: AnchorButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AnchorButton>

export const Small: Story = {
  args: {
    href: '/',
    variant: 'primary',
    size: 'sm',
    children: 'AnchorButton',
  },
}

export const Medium: Story = {
  args: {
    href: '/',
    variant: 'primary',
    size: 'md',
    children: 'AnchorButton',
  },
}

export const Large: Story = {
  args: {
    href: '/',
    variant: 'primary',
    size: 'lg',
    children: 'AnchorButton',
  },
}

export const Primary: Story = {
  args: {
    href: '/',
    variant: 'primary',
    children: 'AnchorButton',
  },
}

export const Secondary: Story = {
  args: {
    href: '/',
    variant: 'secondary',
    children: 'AnchorButton',
  },
}

export const Tertiary: Story = {
  args: {
    href: '/',
    variant: 'tertiary',
    children: 'AnchorButton',
  },
}

export const Error: Story = {
  args: {
    href: '/',
    variant: 'error',
    children: 'AnchorButton',
  },
}

export const Outline: Story = {
  args: {
    href: '/',
    variant: 'outline',
    children: 'AnchorButton',
  },
}

export const Link: Story = {
  args: {
    href: '/',
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
