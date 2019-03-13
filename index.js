const cypress = require('cypress')
const keys = require('./services/keys')

cypress.run({
	browser: 'chrome',
	config: {
		baseUrl: 'http://dev-cypress-testing.pantheonsite.io/',
		chromeWebSecurity: false,
	},
	env:{
		password: keys.login.password
	},
	key: 'i5kipi',
	spec: './cypress/integration/test-cases.js'
}).then((results) => {
	console.log(results)
}).catch((err) => {
	console.log(err)
})