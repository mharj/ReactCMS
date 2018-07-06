import React from 'react';
import {Route} from 'react-router-dom';

class BlogRouter extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			blog: props.blog,
		};
		this.BlogView = () => (
			<props.blogClass {...this.state} />
		);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			blog: nextProps.blog,
		});
	}
	render() {
		return (<Route exact={true} path={this.state.blog.to} component={this.BlogView} />);
	}
}
export default BlogRouter;
