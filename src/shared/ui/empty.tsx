import { PackageOpen } from 'lucide-react'

export interface EmptyProps {
  text?: string
}

export const Empty = ({ text }: EmptyProps) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center p-12 text-center">
      <PackageOpen size={46} />
      <p className="mt-4 text-muted-foreground text-2xl">{text || '데이터가 없습니다.'}</p>
    </div>
  )
}
