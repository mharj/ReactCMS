import React from 'react';
import {Route} from 'react-router-dom';

class BlogRouter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: props.blogs,
		};
		this.BlogView = () => (
			<props.blogClass blogs={this.state.blogs} />
		);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			blogs: nextProps.blogs,
		});
	}
	render() {
		return (<Route exact={true} path={this.props.to} component={this.BlogView} />);
	}
}
export default BlogRouter;
