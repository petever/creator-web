'use client'

import QueryProvider from "@/app/providers/QueryProvider";
import AuthProvider from "@/app/providers/AuthProvider";

type TestComponentProp = {
  children: React.ReactNode
}
const TestComponent = ({ children }: TestComponentProp) => {
  return   (
		<AuthProvider>
			<QueryProvider>
				{children}
			</QueryProvider>
		</AuthProvider>
	)
}

export default TestComponent
