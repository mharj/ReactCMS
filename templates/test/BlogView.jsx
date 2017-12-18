import React from 'react';

import BlogEntry from './BlogEntry.jsx';

class BlogView extends React.Component {
	constructor(props) {
		super(props);
		console.log('BlogView', props);
	}
	render() {
		return (
			<table style={{width: '800px'}}>
				<tbody>
					{this.props.blogs.map( (blog, idx) => {
						return <BlogEntry key={idx} {...blog} />;
					})}
				</tbody>
			</table>
		);
	}
}
export default BlogView;
