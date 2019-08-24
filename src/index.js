import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import AppList from "./components/AppList/AppList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class App extends React.Component {
  render() {
    const title = "Demo App";
    return (
      <div className="App">
        <Header title={title} />
        <div className="container-fluid">
          <AppList />
        </div>
        {/* .container-fluid */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// function App() {
// 	return (
// 		<div className="App">
// 			<Header />
// 			<div className="container-fluid">
// 				<AppList/>
// 			</div>	{/* .container-fluid */}
// 		</div>
// 	);
// }
