import Document, { Html, Head, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='nl'>
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id='notifications'> </div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
