import { Alert } from "bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import plants from "../images/threeplants.png";
import axiosInstance from "./axiosFetch";
//import AlertDismissible from "./AlertDismissible";

function Register({ username, email, password, password1, error }) {
	const history = useHistory();
	const [details, setDetails] = useState({
		username: "",
		email: "",
		password: "",
		password1: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(details);

		if (details.password === details.password1) {
			axiosInstance
				.post("/register", {
					username: details.username,
					email: details.email,
					password: details.password,
					//Second password field omitted from post request - ONLY for front-end verification
				})
				.then((res) => {
					alert(
						// eslint-disable-next-line no-multi-str
						"Successfully registered - please sign in with your new details to begin exploring our plants!"
					);
					history.push("/signin/");
					console.log(res);
					console.log(res.data);
				});
		} else {
			alert("please enter matching passwords!");
			history.push("/register");
		}
	};

	return (
		<div className="font-link">
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2 className="page-title">
						<b>Register</b>
					</h2>
					{error !== "" ? <div className="error">{error}</div> : ""}
					<div className="form-group">
						<label htmlFor="username">Create Username:</label>
						<input
							type="text"
							username="username"
							id="username"
							onChange={(e) =>
								setDetails({ ...details, username: e.target.value })
							}
							value={details.username}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="text"
							email="email"
							id="email"
							onChange={(e) =>
								setDetails({ ...details, email: e.target.value })
							}
							value={details.email}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Create Password: </label>
						<input
							type="password"
							password="password"
							id="password"
							onChange={(e) =>
								setDetails({ ...details, password: e.target.value })
							}
							value={details.password}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Confirm Password: </label>
						<input
							type="password"
							password="password1"
							id="password1"
							onChange={(e) =>
								setDetails({ ...details, password1: e.target.value })
							}
							value={details.password1}
						/>
					</div>
				</div>
				<input type="submit" value="Sign Up Now!" />
				<div>
					<Link
						to="/signin"
						className="link"
						style={{ textDecoration: "none" }}
					>
						Click here to log in
					</Link>
				</div>
			</form>
			<img src={plants} alt={"!"} className="threeplants" />
		</div>
	);
}

export default Register;
