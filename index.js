// Import CACCL
const initCACCL = require('caccl/server/react');

// Initialize CACCL
const app = initCACCL({
	disableAuthorisation: true,
	disableClientSideAPI: true,
	disabledServerSideAPI: true,
	installationCredentials: {
		consumer_key: "cert",
		consumer_secret: "cert"
	}
});

// ^ App is an express app. Add routes the usual way.
