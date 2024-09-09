import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from '@/tests/TestComponent'
import { FeedButtons } from '@/features'

const context = describe

const fn = vi.fn()
describe('피드에 있는 버튼들이 있다.', () => {
  context('좋아요 버튼을 누른다.', () => {
    render(
      <TestComponent>
        <FeedButtons id={'feed_01'} onDetailModal={fn} />
      </TestComponent>,
    )

    const favoriteBtn = screen.getByTestId('favorite_btn')

    it('좋아요 상태가 변경된다.', async () => {
      console.log(await userEvent.click(favoriteBtn))
    })
  })
})
