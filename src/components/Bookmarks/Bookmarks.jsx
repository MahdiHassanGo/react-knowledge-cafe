
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className='md:w-1/3 w-full px-4'>
    <h2 className='text-2xl md:text-4xl'>Bookmarks</h2>
    {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
    <p>Total Reading Time: {readingTime} minutes</p>
  </div>
  
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks