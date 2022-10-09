import { usePhoto } from '../context/PhotoContext'
import SinglePhoto from './SinglePhoto'
import InfiniteScroll from 'react-infinite-scroll-component'

function PhotoContainer() {
  const { photo, hasMore, fetchData } = usePhoto()
  return (
    <InfiniteScroll
      dataLength={photo.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<p>Loading.....</p>}
      endMessage={<p>end</p>}>
      <div className="grid grid-cols-3 my-5">
        {photo.map((item, index) => (
          <SinglePhoto key={index} photo={item} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default PhotoContainer
