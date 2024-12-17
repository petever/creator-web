interface LayoutProps {
  children: React.ReactNode
}

export function BorderLayout({ children }: LayoutProps) {
  return <section className="h-full border-x z-40">{children}</section>
}
