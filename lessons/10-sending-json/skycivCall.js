const skyciv = require('skyciv');

const apiObject = {
	auth: {
		username: 'YOUR_SKYCIV_USERNAME',
		key: 'YOUR_SKYCIV_API_KEY',
	},
	functions: [
		{
			function: 'S3D.session.start',
			arguments: {
				keep_open: false,
			},
		},
	],
};

const jsonData = JSON.stringify(apiObject);

const callback = function (res) {
	const resObject = JSON.parse(res);
	console.log(resObject);
};

skyciv.request(jsonData, callback);