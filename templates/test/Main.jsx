import React from 'react';
import BlogView from './BlogView.jsx';
import PageView from './PageView.jsx';
import PageRouter from '../../components/PageRouter.jsx';
import BlogRouter from '../../components/BlogRouter.jsx';
import Menu from './Menu.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
		let menuEntries = [{'to': props.blog.to, 'title': 'Blog'}];
		props.pages.forEach( (page, idx) => {
			menuEntries.push({to: page.to, title: page.title});
		});
		this.state = {
			topMenuEntries: menuEntries,
			secondMenuEntries: [],
		};
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
					<BlogRouter {...this.props} blogClass={BlogView} />
					<PageRouter {...this.props} pageClass={PageView} />
				</div>
			</div>
		);
	}
}
export default Main;
