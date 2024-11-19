import React from 'react'

const Gallery = () => {
  const images = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    url: `https://via.placeholder.com/300?text=Image+${index + 1}`,
  }))

  const chunkArray = (arr: typeof images, size: number) =>
    arr.reduce(
      (acc, _, index) => {
        if (index % size === 0) acc.push(arr.slice(index, index + size))
        return acc
      },
      [] as (typeof images)[],
    )

  const groupedImages = chunkArray(images, 5)

  return (
    <div className="max-w-screen-lg">
      {groupedImages.map((group, groupIndex) => {
        return (
          <div key={groupIndex} className="overflow-hidden">
            <div
              className={`relative w-[calc(33.3333%-4px)] mb-1 mr-1  ${groupIndex % 2 === 0 ? 'float-left' : 'float-right'}`}
            >
              <div className={`relative pb-[calc(200%+4px)]`}>
                <img
                  src={group[0]?.url}
                  alt={`더미 이미지 ${group[0]?.id}`}
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            </div>
            {group.slice(1).map((image) => (
              <div className="float-left w-[calc(33.3333%-4px)] mb-1 mr-1">
                <img
                  src={image.url}
                  alt={`더미 이미지 ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
