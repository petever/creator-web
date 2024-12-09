'use client'

interface LayoutProps {
  children: React.ReactNode
}

export async function BorderLayout({ children }: LayoutProps) {
  return <section className="border-x">{children}</section>
}
