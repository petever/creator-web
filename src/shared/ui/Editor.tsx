import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'
import { Link } from '@mantine/tiptap'
import { useEffect } from 'react'

interface EditorProps {
  value?: string
  onChange?: (html: string) => void
  height?: string
}
export const Editor = ({ value, onChange, height = '100%' }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        defaultProtocol: 'https',
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
