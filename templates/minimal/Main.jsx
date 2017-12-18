import React from 'react';
import BlogView from './BlogView.jsx';
import PageView from './PageView.jsx';
import PageRouter from '../../components/PageRouter.jsx';
import BlogRouter from '../../components/BlogRouter.jsx';

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
