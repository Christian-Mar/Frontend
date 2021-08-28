import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
	{
		slug: 'getting-started-with-nextjs1',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is the React framework for Production! It makes building fullstack React apps & sites a bit ... ',
		date: '2022-02-10',
	},
	{
		slug: 'getting-started-with-nextjs2',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is the React framework for Production! It makes building fullstack React apps & sites a bit ... ',
		date: '2022-02-10',
	},
	{
		slug: 'getting-started-with-nextjs3',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is the React framework for Production! It makes building fullstack React apps & sites a bit ... ',
		date: '2022-02-10',
	},
	{
		slug: 'getting-started-with-nextjs4',
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJS is the React framework for Production! It makes building fullstack React apps & sites a bit ... ',
		date: '2022-02-10',
	},
];

function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}

export default HomePage;

// 1. Hero section
// 2. Featured Posts
