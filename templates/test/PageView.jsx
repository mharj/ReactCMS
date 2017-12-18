import React from 'react';

class PageView extends React.Component {
	constructor(props) {
		super(props);
		this.getContent = this.getContent.bind(this);
	}
	getContent() {
		return {__html: this.props.document};
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={this.getContent()} />
		);
	}
}
export default PageView;
