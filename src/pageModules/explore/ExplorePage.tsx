import SearchBar from '@/widgets/explore/ui/SearchBar'
import { getSearchTrends } from '@/entities/explore/api/getSearchTrends'
import Gallery from '@/widgets/explore/ui/Gallery'

const ExplorePage = async () => {
  const searchTrends = await getSearchTrends({ pageParam: { size: 20, page: 0 } })

  return (
    <div className="pt-4 flex flex-col gap-4">
      <SearchBar />
      <Gallery initialData={searchTrends} />
    </div>
  )
}

export default ExplorePage
