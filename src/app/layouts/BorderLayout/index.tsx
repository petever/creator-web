'use client'

interface LayoutProps {
  children: React.ReactNode
}

export async function BorderLayout({ children }: LayoutProps) {
  return <section className="h-screen border-x">{children}</section>
}
