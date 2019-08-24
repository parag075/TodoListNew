import React from "react";
import AppListView from "./AppListView";
import DetailsView from "./DetailsView";

class AppList extends React.Component {
	arrListItems = ["item1", "item2", "item3"];

	render() {
		return (
			<div className="row">
				<div className="col-4">
					<AppListView arrListItems={this.arrListItems} />
				</div>{" "}
				{/* .col-4*/}
				<div className="col-8">
					<DetailsView />
				</div>{" "}
				{/* .col-8*/}
			</div>
		);
	}
}

export default AppList;
