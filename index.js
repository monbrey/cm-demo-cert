// Import CACCL
const initCACCL = require('caccl/server/react');

// Initialize CACCL
const app = initCACCL({
	disableAuthorisation: true,
	disableClientSideAPI: true,
	disabledServerSideAPI: true,
});

// ^ App is an express app. Add routes the usual way.
