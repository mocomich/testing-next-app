import { StoryObj, Meta } from '@storybook/react'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  title: 'ui-elements/Switch',
  args: { id: 'id' },
  component: Switch,
  parameters: {
    a11y: {
      config: { rules: [{ id: 'label', enabled: false }] },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const CheckedDisabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}
