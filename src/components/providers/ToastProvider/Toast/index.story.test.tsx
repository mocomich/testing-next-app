import { render, screen, waitFor } from '@testing-library/react'
import * as stories from './index.stories'
import { composeStories } from '@storybook/react'

const { Success, Error } = composeStories(stories)

test('Success', async () => {
  render(<Success />)
  await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
})

test('Error', async () => {
  render(<Error />)
  await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
})
