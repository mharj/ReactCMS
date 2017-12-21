import React from 'react';
import {Route} from 'react-router-dom';

class PageRouter extends React.Component {
	constructor(props) {
		super(props);
		let pageComponents = props.pages.map( (page, idx) => {
			return () => {
				return (
					<props.pageClass document={page.document} />
				);
			};
		});
		this.state = {
			pages: props.pages,
			pageComponents: pageComponents,
		};
	}
	componentWillReceiveProps(nextProps) {
		let pageComponents = nextProps.pages.map( (page, idx) => {
			return () => {
				return (
					<nextProps.pageClass document={page.document} />
				);
			};
		});
		this.setState({
			pages: nextProps.pages,
			pageComponents: pageComponents,
		});
	}
	render() {
		let self = this;
		let routes = this.state.pages.map( (page, idx) => {
			return <Route key={idx} exact={true} path={page.to} component={self.state.pageComponents[idx]} />;
		});
		return (routes);
	}
}
export default PageRouter;
