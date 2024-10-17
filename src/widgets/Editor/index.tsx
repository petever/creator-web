'use client'
import '@mantine/tiptap/styles.css'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Link, RichTextEditor } from '@mantine/tiptap'
import Placeholder from '@tiptap/extension-placeholder'

interface EditorProps {
  placeholder?: string
  content?: string
  onChange?: (content: string) => void
}

const Editor = ({ placeholder = '', content, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: 'https',
      }),
      Placeholder.configure({ placeholder: placeholder }),
    ],
    onUpdate: ({ editor }) => onChange && onChange(editor.getHTML()),
    content,
  })
  return (
    <RichTextEditor editor={editor} className="editor">
      <RichTextEditor.Content />
    </RichTextEditor>
  )
}

export default Editor
