import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider, translate} from 'react-i18next';
import i18n from '../../views/i18n'; // initialized i18next instance
import BlogView from './BlogView.jsx';
import PageView from './PageView.jsx';
import PageRouter from '../../components/PageRouter.jsx';
import BlogRouter from '../../components/BlogRouter.jsx';
import Menu from './Menu.jsx';
import AppClass from '../../views/App.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log('Main', props);
		let menuEntries = [{'to': props.blog.to, 'title': 'Blog'}];
		props.pages.forEach( (page, idx) => {
			menuEntries.push({to: page.to, title: page.title});
		});
		this.state = {
			topMenuEntries: menuEntries,
			secondMenuEntries: [],
			pages: props.pages,
			blog: props.blog,
		};
	}
	componentWillReceiveProps(nextProps) {
		let menuEntries = [{'to': nextProps.blog.to, 'title': 'Home'}];
		nextProps.pages.forEach( (page, idx) => {
			menuEntries.push({to: page.to, title: page.title});
		});
		this.setState({
			topMenuEntries: menuEntries,
			pages: nextProps.pages,
			blog: nextProps.blog,
		});
	}
	render() {
		return (
			<div>
				<div>
					<Menu list={this.state.topMenuEntries} />
				</div>
				<div>
					<Menu list={this.state.secondMenuEntries} />
				</div>
				<br/>
				<div id='content'>
					<BlogRouter {...this.state} blogClass={BlogView} />
					<PageRouter {...this.state} pageClass={PageView} />
				</div>
			</div>
		);
	}
}
//export default translate(['common'])(Main);
export default Main;
// init App
// let AppInstance = () => <AppClass mainClass={Main} />;
// ReactDOM.render(<I18nextProvider i18n={ i18n }><AppInstance title='React CMS' /></I18nextProvider>, document.getElementById('content'));


// ReactDOM.render(<I18nextProvider i18n={ i18n }><AppClass mainClass={Main} title='React CMS' /></I18nextProvider>, document.getElementById('content'));
ReactDOM.render(<AppClass mainClass={Main} title='React CMS' />, document.getElementById('content'));
