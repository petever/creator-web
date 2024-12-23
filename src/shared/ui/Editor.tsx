import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'
import { useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'

interface EditorProps {
  value?: string | null
  onChange?: (html: string) => void
  height?: string
  placeholder?: string
}

export const Editor = ({ value, onChange, height = '100%', placeholder = '' }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        defaultProtocol: 'https',
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
  })

  useEffect(() => {
    if (!value) return
    editor?.commands.setContent(value)
  }, [editor])

  useEffect(() => {
    editor?.on('update', () => {
      if (!onChange) return
      onChange(editor.getHTML())
    })
  }, [editor])

  return (
    <EditorContent
      editor={editor}
      className="border rounded-md"
      style={{
        width: '100%',
        height,
        overflow: 'auto',
      }}
    />
  )
}
