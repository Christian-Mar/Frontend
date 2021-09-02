import { Fragment } from 'react';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function SinglePostPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.post.title}</title>
				<meta name='description' content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</Fragment>
	);
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
		/* revalidate doet ee update om de 600 seconden (10 minuten), wat we in de vorige returns met getStaticProps niet gedaan hebben om niet door alle files te moeten gaan, wat zou wegen op de performance (requests vertragen)*/
	};
}

// getStaticProps werkt niet op zichzelf voor deze dynamische pagina
// Path naar de de juiste content is nog nodig

export function getStaticPaths() {
	const postFilenames = getPostsFiles(); //komt uit utils

	const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: false,
	}; // dit zorgt ervoor dat alle paths er vooraf zijn
}

export default SinglePostPage;
