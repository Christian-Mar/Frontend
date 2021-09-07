import React, { Fragment } from 'react';
import Links from '../components/links/links';
import Head from 'next/head';

function LinkPage() {
	return (
		<Fragment>
			<Head>
				<title>Links</title>
				<meta
					name='description'
					content="Links naar diverse pagina's voor frontend development"
				/>
			</Head>
			<Links />
		</Fragment>
	);
}

export default LinkPage;
