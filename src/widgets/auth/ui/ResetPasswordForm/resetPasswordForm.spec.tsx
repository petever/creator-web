import {describe, it, expect, beforeAll,} from "vitest";
import ResetPasswordForm from "@/widgets/auth/ui/ResetPasswordForm/index";
import {render, fireEvent} from "@testing-library/react";
import TestComponent from "@/tests/TestComponent";
import {z} from "zod";
import userEvent, {UserEvent} from "@testing-library/user-event";


describe('이메일 폼에 이메일이 입력된다.', () => {
  let user : UserEvent

  beforeAll(() => {
    user = userEvent.setup()
  })

  it('이메일 폼에 이메일이 올바르지 않다.', () => {
    const screen = render(
      <TestComponent>
        <ResetPasswordForm/>
      </TestComponent>
    )
    const emailInput = screen.getByLabelText('이메일')!;
    const emailValue = 'test';
    const emailSchema = z.string().email();
    expect(emailSchema.safeParse(emailValue).success).toBeFalsy();
  });

  it('이메일 폼에 이메일이 올바르다.', () => {
    const screen = render(
      <TestComponent>
        <ResetPasswordForm/>
      </TestComponent>
    )
    const emailValue = 'test@google.com';
    const emailSchema = z.string().email();
    expect(emailSchema.safeParse(emailValue).success).toBeTruthy();
  });

  it('비밀번호 재설정 링크가 비활성화 되어 있다.', async () => {
    const screen = render(
      <TestComponent>
        <ResetPasswordForm/>
      </TestComponent>
    )

    const button = screen.container.querySelector('button')!

    expect(button.disabled).toBeTruthy()
  })

  it('이메일이 입력되면, 비밀번호 재설정 링크가 비활성화 되어 있다.', async () => {
    const screen = render(
      <TestComponent>
        <ResetPasswordForm/>
      </TestComponent>
    )
    const emailInput = screen.getByLabelText('이메일')!;
    const button = screen.container.querySelector('button')!

    await userEvent.type(emailInput, 'test@google.com')

    expect(button.disabled).toBeFalsy()
  })
});