import React from 'react';
import {Route} from 'react-router-dom';

class BlogRouter extends React.Component {
	constructor(props) {
		super(props);
		this.BlogView = () => (
			<props.blogClass blogs={props.blog.entries} />
		);
	}
	render() {
		return (<Route exact={true} path={this.props.blog.to} component={this.BlogView} />);
	}
}
export default BlogRouter;
