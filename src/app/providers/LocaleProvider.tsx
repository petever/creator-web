'use client'
import { ReactElement } from 'react'
import { I18nProviderClient } from '@/shared/locales/client'

interface LocaleProviderProps {
  params?: {
    locale: string
  }
  children: React.ReactNode
}

export default function LocaleProvider({ params, children }: LocaleProviderProps) {
  return <I18nProviderClient locale={'ko'}>{children}</I18nProviderClient>
}
