import { createContext, useEffect, useState, useContext } from 'react'
import * as photoService from '../api/photoApi'

const PhotoContext = createContext()

function PhotoContextProvider({ children }) {
  const [photo, setPhoto] = useState([])
  const [page, setPage] = useState(2)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const res = await photoService.getPhoto()
        setPhoto(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPhoto()
  }, [])

  const fetchData = async () => {
    try {
      const nextData = await photoService.getPhoto(page)
      setPhoto([...photo, ...nextData.data])
      if (nextData.length === 0 || nextData.length < 10) {
        setHasMore(false)
      }
      setPage(page + 1)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PhotoContext.Provider value={{ photo, fetchData, hasMore }}>
      {children}
    </PhotoContext.Provider>
  )
}

export const usePhoto = () => {
  return useContext(PhotoContext)
}

export default PhotoContextProvider
