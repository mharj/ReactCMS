const express = require('express');
const fs = require('fs');
const app = express();
let port = process.env.PORT || 8080;
app.use(express.static('static'));
app.use(express.static('dist'));
app.use('/locales', express.static('locales'));
// TODO blog loader
// TODO page loader
// https://webpack.js.org/api/node/#installation

app.get('/api/content', function(req, res) {
	let promises = [];
	let files = fs.readdirSync('storage/page');
	files.forEach( function(file) {
		promises.push( new Promise( (resolve, reject) => {
			fs.readFile('storage/page/'+file, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve({type: 'page', data: JSON.parse(data)});
				}
			});
		}));
	});
	promises.push( new Promise( (resolve, reject) => {
		fs.readFile('storage/blog/all.json', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve({type: 'blog', data: JSON.parse(data)});
			}
		});
	}));
	Promise.all(promises).then( (values) => {
		res.json(values);
		res.end();
	})
	.catch( (err) => {
		res.end();
	});
});

app.listen(port, function() {
	console.log('service running on port '+port);
});
