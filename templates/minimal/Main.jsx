import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider, translate} from 'react-i18next';
import i18n from '../../views/i18n'; // initialized i18next instance
import BlogView from './BlogView.jsx';
import PageView from './PageView.jsx';
import PageRouter from '../../components/PageRouter.jsx';
import BlogRouter from '../../components/BlogRouter.jsx';
import AppClass from '../../views/App.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id='content'>
				<BlogRouter {...this.props} blogClass={BlogView} />
				<PageRouter {...this.props} pageClass={PageView} />
			</div>
		);
	}
}
export default Main;
// init App
let App = () => <AppClass Main={Main} />;
let AppInstance = translate(['common'])(App);
ReactDOM.render(<I18nextProvider i18n={ i18n }><AppInstance title='React CMS' /></I18nextProvider>, document.getElementById('content'));
