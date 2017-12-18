import React from 'react';

class BlogEntry extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div><h2>{this.props.title} <small>{this.props.editor}</small></h2></div>
				<div>{this.props.content}</div>
			</div>
		);
	}
}
export default BlogEntry;
