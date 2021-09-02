import React, { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';


function HomePage(props) {
	return (
		<Fragment>
    <Head>
      <title>Max' Blog</title>
      <meta name="description" content="Notities over frontend web development"/>
    </Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() { //posts blijven hier tamelijk stabiel
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
};

export default HomePage;


