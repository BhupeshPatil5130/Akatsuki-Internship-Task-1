
import { blogPosts } from './blogPosts'; 

import authorimg from '../assets/images/author.png'

const BlogCards = () => {
  return (
    <div className="blog-card-group">
      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          <div className="blog-card-banner">
            <img
              src={post.image}
              alt={post.alt}
              width="250"
              className="blog-banner-img"
            />
          </div>

          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">{post.topic}</button>

            <h3>
              <a href="#" className="h3">
                {post.title}
              </a>
            </h3>

            <p className="blog-text">{post.excerpt}</p>

            <div className="wrapper-flex">
              <div className="profile-wrapper">
                <img
                  src={authorimg}
                  alt={post.author}
                  width="50"
                />
              </div>

              <div className="wrapper">
                <a href="#" className="h4">{post.author}</a>

                <p className="text-sm">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="separator"></span>
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime={`PT${post.time.replace(' min', 'M')}`}>
                    {post.time}
                  </time>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
