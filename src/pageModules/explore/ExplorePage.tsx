'use client'

import Gallery from '@/widgets/explore/ui/Gallery'
import SearchBar from '@/widgets/explore/ui/SearchBar'

const ExplorePage = () => {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <SearchBar />
      <Gallery />
    </div>
  )
}

export default ExplorePage
