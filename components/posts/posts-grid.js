import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props) {
  const { props } = props;

	return <ul className={classes.grid}>
    {PostsGrid.map((post) => <PostItem />)}
  </ul>;
}

export default PostsGrid;
