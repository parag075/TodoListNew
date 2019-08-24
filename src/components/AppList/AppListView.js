import React from "react";
import ListItem from "./ListItem";

class AppListView extends React.Component {
	activateLasers = () => {
		alert("hi there");
	};

	render() {
		return (
			<div className="list-group" id="list-tab" role="tablist">
				{this.props.arrListItems.map((val, index) => (
					<ListItem
						key={index}
						title={val}
						activateLasers={this.activateLasers.bind(this)}
					/>
				))}
			</div>
		);
	}
}

export default AppListView;
