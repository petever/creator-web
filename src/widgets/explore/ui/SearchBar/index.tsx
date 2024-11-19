import React from 'react'
import { Input } from '@/shared/ui/input'
import { Search } from 'lucide-react'
import { Form } from '@/shared/ui/form'
import { useForm } from 'react-hook-form'

const SearchBar = () => {
  const [isFocused, setIsFocused] = React.useState(false)
  const form = useForm({
    mode: 'all',
  })

  return (
    <Form {...form}>
      <form className="relative">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search"
            className="w-full p-4 pl-10 text-md rounded-xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="text-gray-400" />
          </button>
        </div>
        {isFocused && (
          <div className="absolute  top-full bottom-0 left-0 min-h-dvh w-full bg-white border border-gray-300 rounded-md mt-1 z-20">
            <ul>
              <li className="p-2 hover:bg-gray-100">Item 1</li>
              <li className="p-2 hover:bg-gray-100">Item 2</li>
              <li className="p-2 hover:bg-gray-100">Item 3</li>
            </ul>
          </div>
        )}
      </form>
    </Form>
  )
}

export default SearchBar
