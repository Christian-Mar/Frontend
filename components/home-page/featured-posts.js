import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

function FeaturedPosts(props) {
  return <section className={classes.latest}>
  <h2>To do's of notities in ontwikkeling</h2>
  <PostsGrid posts={props.posts}/>
  </section>
}

export default FeaturedPosts;