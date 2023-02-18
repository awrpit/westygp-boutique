import React from 'react';
import BlogPost from './BlogPost';
import classes from './BlogSection.module.css';

const BlogSection = () => {
  return (
    <div className={classes.container}>
      <span className={classes.subtitle}>Latest News</span>
      <span className={classes.title}>Fashion New Trends</span>
      <div className={classes.innerContainer}>
        <BlogPost link='/' title='Title' date='18 February 2021' image='/images/ghagra.jpg'  />
        <BlogPost link='/' title='Title' date='18 February 2021' image='/images/ghagra.jpg'  />
        <BlogPost link='/' title='Title' date='18 February 2021' image='/images/ghagra.jpg'  />
      </div>
    </div>
  );
};

export default BlogSection;
