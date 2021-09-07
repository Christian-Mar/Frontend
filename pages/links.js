import React, { Fragment } from 'react';
import Head from 'next/head';
import Links from '../components/links/links';

function LinkPage() {
	return (
		<Fragment>
			<Head>
				<title>Links</title>
				<meta
					name='description'
					content="Links over frontend development"
				/>
			</Head>
			<Links />
		</Fragment>
	);
}

export default LinkPage;
