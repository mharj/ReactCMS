import React from 'react';

import Main from './test/Main.jsx';

class TemplateLoader extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<Main {...this.props.content}/>);
	}
}
export default TemplateLoader;
