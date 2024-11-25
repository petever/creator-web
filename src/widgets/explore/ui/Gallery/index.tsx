'use client'

import React, { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchTrends } from '@/entities/explore/hooks/useSearchTrends'
import { BASE_URL } from '@/shared/constants/apiURL'

interface GalleryProps {
  initialData: any
}

const Gallery = ({ initialData }: GalleryProps) => {
  const { data, fetchNextPage } = useSearchTrends(initialData)

  const images = useMemo(() => (data ? data.pages.flatMap(({ content }) => content) : []), [data])

  const { ref, inView } = useInView()

  const chunkArray = (arr: typeof images, size: number) =>
    arr.reduce(
      (acc, _, index) => {
        if (index % size === 0) acc.push(arr.slice(index, index + size))
        return acc
      },
      [] as (typeof images)[],
    )

  const groupedImages = chunkArray(images, 5)

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView])

  return (
    <div className="max-w-screen-lg">
      {groupedImages.map((group: any, groupIndex: number) => {
        return (
          <div key={group[0]?.id} className="overflow-hidden">
            <div
              className={`relative w-[calc(33.3333%-4px)] mb-1 mr-1  ${groupIndex % 2 === 0 ? 'float-left' : 'float-right'}`}
            >
              <div className={`relative pb-[calc(200%+4px)]`}>
                <img
                  src={`${BASE_URL}${group[0]?.postResources[0]?.filePath}`}
                  alt={`더미 이미지 ${group[0]?.id}`}
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            </div>
            {group.slice(1).map((image: any) => {
              return (
                <div key={image.id} className="float-left w-[calc(33.3333%-4px)] mb-1 mr-1">
                  <img
                    src={`${BASE_URL}${image.postResources[0]?.filePath}`}
                    alt={`더미 이미지 ${image.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            })}
          </div>
        )
      })}
      <div ref={ref}></div>
    </div>
  )
}

export default Gallery
