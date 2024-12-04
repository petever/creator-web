'use client'

interface LayoutProps {
  children: React.ReactNode
}

export async function BorderLayout({ children }: LayoutProps) {
  return <section className="h-screen px-2 border-x">{children}</section>
}
