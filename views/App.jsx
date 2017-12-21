import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {I18nextProvider, translate} from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance

import TemplateLoader from '../templates/TemplateLoader.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: {
				blog:
				{
					to: '/',
					entries: [],
				},
				pages:
				[],
			},
		};
	}
	componentDidMount() {
		let self = this;
		fetch('/api/content').then(function(response) {
			return response.json();
		}).then(function(data) {
			let cont = {
				blog:
				{
					to: '/',
					entries: [],
				},
				pages: [],
			};
			data.forEach( (e) => {
				if ( e.type == 'page' ) {
					let page = e.data;
					let doc = page.document[i18n.language]||page.document;
					let title = page.title[i18n.language]||page.title;
					cont.pages.push({document: doc, to: page.to, title: title});
				}
				if ( e.type == 'blog' ) {
					let blog = e.data;
					cont.blog.to = blog.to;
					blog.entries.forEach( (e) => {
						if ( 'lang' in e ) {
							if ( e.lang == i18n.language ) {
								cont.blog.entries.push(e);
							}
						} else {
							cont.blog.entries.push(e);
						}
					});
				}
			});
			self.setState({
				content: cont,
			});
		});

		// fetch '/api/content'
	}
	render() {
		return <HashRouter><TemplateLoader {...this.props} content={this.state.content} /></HashRouter>;
	}
}
let AppInstance = translate(['common'])(App);
ReactDOM.render(<I18nextProvider i18n={ i18n }><AppInstance title='React CMS' /></I18nextProvider>, document.getElementById('content'));
