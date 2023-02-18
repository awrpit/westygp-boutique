import React from 'react';
import classes from './BlogPost.module.css';

const BlogPost = ({ image, title, date, link }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt={title} />
      <div className={classes.innerContainer}>
        <div className={classes.dateContainer}>
          {date}
        </div>
        <span className={classes.title}>Title</span>
        <a href={link} className={classes.readMore}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
