import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.list.map( (e, idx) => {
					return <em key={idx}><Link to={e.to}>{e.title}</Link> | </em>;
				})}
			</div>
		);
	}
}
export default Menu;
