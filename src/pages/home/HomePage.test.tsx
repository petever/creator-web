import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/home/HomePage'
import TestComponent from '@/tests/TestComponent'
import { vi } from 'vitest'
test('HomePage Test Code', () => {
  render(
    <TestComponent>
      <HomePage />
    </TestComponent>,
  )
  expect(screen.getByText('Feed')).toContain
})
