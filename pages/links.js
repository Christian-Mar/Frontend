import React, { Fragment } from 'react';
import Links from '../components/links/links';

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
