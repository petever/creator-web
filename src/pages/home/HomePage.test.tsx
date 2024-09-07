import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from "@/pages/home/HomePage";
import TestComponent from "@/tests/TestComponent";
import {vi} from 'vitest'
test('App Router: Works with Server Components', () => {
  render(
      <TestComponent>
        <HomePage />
      </TestComponent>
  )
  expect(screen.getByRole('heading', { level: 1, name: 'App Router' })).toBeDefined()
})
