import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-10 space-y-4'>
        <img className='w-full mb-4 md:mb-8' src={cover} alt={`Cover of ${title}`} />
        <div className='flex flex-col md:flex-row justify-between mb-4'>
          <div className='flex items-center'>
            <img className='w-10 md:w-14' src={author_img} alt="" />
            <div className='ml-4 md:ml-6'>
              <h3 className='text-lg md:text-2xl'>{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className='mt-4 md:mt-0'>
            <span>{reading_time} min read</span>
            <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl md:text-2xl text-red-600'>
              <FaBookmark></FaBookmark>
            </button>
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl">{title}</h2>
        <p>
          {hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)}
        </p>
        <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
      </div>
      
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;