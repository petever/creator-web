import QueryProvider from "@/app/providers/QueryProvider";
import AuthProvider from "@/app/providers/AuthProvider";

type TestComponentProp = {
  children: React.ReactNode
}
const TestComponent = ({ children }: TestComponentProp) => {
  return   (
		<QueryProvider>
			{children}
		</QueryProvider>
	)
}

export default TestComponent
