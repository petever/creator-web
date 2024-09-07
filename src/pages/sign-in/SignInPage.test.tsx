import {describe, expect, it, test} from 'vitest'
import {render, screen} from "@testing-library/react";
import SignInPage from "@/pages/sign-in/SignInPage";

const context = describe

describe('1+2', () => {
  it('3이 나온다.', () => {
    expect('3').toEqual
  })
})

// describe('로그인 페이지에 접속하였을 때', () => {
//   context('로그인 컴포넌트가 렌더된다.', () => {
//     it('로그인 페이지임을 확인할 수 있다.', () => {
//       render(<SignInPage/>)
//     })
//   })
// })