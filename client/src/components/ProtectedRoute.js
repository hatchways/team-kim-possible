import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.loggedIn) {
					return <Component {...props}></Component>;
				} else {
					return <Redirect pathname="/"></Redirect>;
				}
			}}
		/>
	);
}

export default ProtectedRoute;
