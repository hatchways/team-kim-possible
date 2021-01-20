import React from "react";
import { Redirect, Route } from "react-router-dom";

// function ProtectedRoute(props) {
// 	const renderComponent = () => {
// 		if (localStorage.loggedIn) {
// 			return props.component;
// 		} else {
// 			return <Redirect to={"/"}></Redirect>;
// 		}
// 	};
// 	return (
// 		<Route exact to={props.to}>
// 			{() => renderComponent()}
// 		</Route>
// 	);
// }

// export default ProtectedRoute;

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
