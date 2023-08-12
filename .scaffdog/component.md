---
name: 'component'
root: 'src/components/'
output: '**/*'
ignore: []
questions:
  name: 'Please enter the name of the component (ex. button)'
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import * as React from 'react'

export const {{ inputs.name | pascal }} = () => {
  return (
    <div>{{ inputs.name | pascal }}</div>
  )
}
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import { StoryObj, Meta } from '@storybook/react'

import { {{ inputs.name | pascal }} } from '.'

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: '{{ output.root | replace "src/components/" "" }}',
  component: {{ inputs.name | pascal }},
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof {{ inputs.name | pascal }}>

export const Default: Story = {
  args:{}
}
```

# `{{ inputs.name | pascal }}/index.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'

import { {{ inputs.name | pascal }} } from '.'

test('should first', () => { second })
```
