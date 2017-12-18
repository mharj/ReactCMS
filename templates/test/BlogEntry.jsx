import React from 'react';

class BlogEntry extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return ([
			<tr key="0">
				<td>{this.props.title}</td><td>{this.props.editor+' '+this.props.published}</td>
			</tr>,
			<tr key="1">
				<td colSpan="2">Tags: {this.props.tags.join(', ')}</td>
			</tr>,
			<tr key="2">
				<td colSpan="2">{this.props.content}</td>
			</tr>,
		]);
	}
}
export default BlogEntry;
