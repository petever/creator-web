import React from "react";

export interface Label {
  label: string
  href: string
  key: string
  icon?: React.ReactNode
  disabled?: boolean
}

export interface Avatars {
  src?: string
  alt?: string
  name?: string
  tag?:string
  description?: string
}
