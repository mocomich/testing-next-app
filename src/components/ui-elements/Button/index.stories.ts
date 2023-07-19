import type { Meta, StoryObj } from '@storybook/react'
import Plus from './assets/Plus.svg'

import { Button } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Button',
  },
}

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
}
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Button',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
}
