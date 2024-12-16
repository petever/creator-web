import SearchBar from '@/widgets/explore/ui/SearchBar'
import { getSearchTrends } from '@/entities/explore/api/getSearchTrends'
import Gallery from '@/widgets/explore/ui/Gallery'

const ExplorePage = async () => {
  const searchTrends = await getSearchTrends({ pageParam: { size: 20, page: 0 } })

  return (
    <div
      className="
      h-[calc(100vh-144px)]
      flex flex-col
      md:h-full
    "
    >
      <SearchBar />
      <Gallery initialData={searchTrends} />
    </div>
  )
}

export default ExplorePage
