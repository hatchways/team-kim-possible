import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute(props) {
	const renderComponent = () => {
		if (localStorage.loggedIn) {
			return props.component;
		} else {
			return <Redirect to={"/"}></Redirect>;
		}
	};
	return <Route to={props.to}>{() => renderComponent()}</Route>;
}

export default ProtectedRoute;
