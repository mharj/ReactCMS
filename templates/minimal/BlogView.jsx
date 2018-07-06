import React from 'react';

import BlogEntry from './BlogEntry.jsx';

class BlogView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blog: props.blog,
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			blog: nextProps.blog,
		});
	}
	render() {
		return (
			<table style={{width: '800px'}}>
				<tbody>
					{this.state.blog.entries.map( (blog, idx) => {
						return <BlogEntry key={idx} {...blog} />;
					})}
				</tbody>
			</table>
		);
	}
}
export default BlogView;
