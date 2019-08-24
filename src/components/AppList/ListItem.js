import React from "react";

class ListItem extends React.Component {
	render() {
		return (
			<div>
				<a
					className="list-group-item list-group-item-action active"
					href=""
				>
					{this.props.title}
				</a>
			</div>
		);
	}
}

export default ListItem;
