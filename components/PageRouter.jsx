import React from 'react';
import {Route} from 'react-router-dom';

class PageRouter extends React.Component {
	constructor(props) {
		super(props);
		this.pageComponents = props.pages.map( (page ,idx) => {
			return () => {
				return (
					<props.pageClass document={page.document} />
				);
			};
		});
	}
	render() {
		let routes = this.props.pages.map( (page, idx) => {
			return <Route key={idx} exact={true} path={page.to} component={this.pageComponents[idx]} />;
		});
		return (routes);
	}
}
export default PageRouter;
