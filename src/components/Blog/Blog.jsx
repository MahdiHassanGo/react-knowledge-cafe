import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, cover, reading_time, posted_date,author, author_img,hashtags } = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
       <div className="ml-8">
        <h3 className="text-2xl">{author}</h3>
        <p>{posted_date}</p>
       </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl ">{title}</h2>
      <p>{hashtags.map((hash,idx) => <span key={idx} ><a href="">{hash}</a></span>)}</p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
