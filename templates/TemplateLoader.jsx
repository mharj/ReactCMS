import React from 'react';

import Main from './mandatory/Main.jsx';

class TemplateLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: props.content,
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			content: nextProps.content,
		});
	}
	render() {
		return (<Main {...this.state.content}/>);
	}
}
export default TemplateLoader;
