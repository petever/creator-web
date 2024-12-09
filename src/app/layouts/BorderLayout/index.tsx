interface LayoutProps {
  children: React.ReactNode
}

export function BorderLayout({ children }: LayoutProps) {
  return <section className="h-screen border-x">{children}</section>
}
