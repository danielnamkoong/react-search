import React, { Component } from 'react';

class List extends Component {
	render() {
		return (
			<div className="List">
				<ul>
					<li>{this.props.name}</li>
				</ul>
			</div>
		);
	}
}

export default List;