const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'christian',
				mongodb_password: 'newCBR650',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'myFirstDatabase',
			},
		};
	}

  return {
		env: {
			mongodb_username: 'christian',
			mongodb_password: 'newCBR650',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'myFirstDatabase',
		},
	};

};
