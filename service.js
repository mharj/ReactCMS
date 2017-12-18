const express = require('express');
const app = express();
let port = process.env.PORT || 8080;
app.use(express.static('static'));
app.use(express.static('dist'));
app.use('/locales', express.static('locales'));
// TODO blog loader
// TODO page loader
// https://webpack.js.org/api/node/#installation

app.listen(port, function() {
	console.log('service running on port '+port);
});
