// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <li className="blog-list-item">
      <div className="item-top">
        <h1 className="item-title">{title}</h1>
        <p className="item-description">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
    </li>
  )
}

export default BlogItem
