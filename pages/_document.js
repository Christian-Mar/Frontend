import Document, { Html, Head, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='nl'>
				<Head />
				<body>
					<Main />
          <NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;