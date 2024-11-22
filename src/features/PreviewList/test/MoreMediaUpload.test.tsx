import {describe, it, expect} from "vitest";
import TestComponent from "@/tests/TestComponent";
import {render} from "@testing-library/react";
import {Button} from "@/shared/ui/button";

const context = describe

describe('MoreMediaUpload 버튼이 있다.', () => {
	let isPreview = false
	context('MoreMediaUpload버튼을 누르면', () => {
		const handlePreviewStatusChange = () => {
			isPreview = true
		}

		it('isPreview의 상태가 바뀐다.', () => {
			const button = render(<Button type='button' onClick={handlePreviewStatusChange}></Button>).getByRole('button')

			expect(isPreview).toBe(false)
			button.click()
			expect(isPreview).toBe(true)
		})
	})
})
