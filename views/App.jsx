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
					to: '/blog',
					entries: [
						{
							title: 'Title text',
							editor: 'Marko Harjula',
							content: 'Hello world',
							tags: ['hello', 'world'],
							published: new Date(),
						},
						{
							title: 'Title text',
							editor: 'Marko Harjula',
							content: 'Hello world',
							tags: ['hello', 'world'],
							published: new Date(),
						},
					],
				},
				pages:
				[
					{
						to: '/',
						title: 'Hello page',
						document: '<h1>Hello Page</h1>',
					},
					{
						to: '/demo',
						title: 'Demo page',
						document: '<h1>Demo Page</h1>',
					},
				],
			},
		};
		console.log('Lang', i18n.language);
	}
	render() {
		return <HashRouter><TemplateLoader {...this.props} content={this.state.content} /></HashRouter>;
	}
}
let AppInstance = translate(['common'])(App);
ReactDOM.render(<I18nextProvider i18n={ i18n }><AppInstance title='React CMS' /></I18nextProvider>, document.getElementById('content'));
