import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import plants from "../images/threeplants.png";
import { useHistory } from "react-router-dom";
import axiosInstance from "./axiosFetch";
import validate from "./validateLogin";

// still functional component just written as lambda function
const SignIn = ({ handleLogin }) => {
	const history = useHistory();
	const [details, setDetails] = useState({
		username: "",
		email: "",
		password: "",
		password1: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(details));
		setIsSubmitting(true);
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			axiosInstance
				.post(`token/`, {
					username: details.username,
					password: details.password,
				})
				.then((res) => {
					localStorage.setItem("access_token", res.data.access);
					localStorage.setItem("refresh_token", res.data.refresh);
					axiosInstance.defaults.headers["Authorization"] =
						"JWT " + localStorage.getItem("access_token");
					history.push("/");
					//console.log(res);
					//console.log(res.data);
					localStorage.setItem("loggedin_username", details.username);
					handleLogin(details.username);
				});
		}
	}, [errors]);

	return (
		<div className="font-link">
			<form onSubmit={handleSubmit}>
				<div className="form-inner">
					<h2 className="page-title">
						<b>Sign In</b>
					</h2>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							username="username"
							id="username"
							placeholder="Enter your username"
							onChange={(e) =>
								setDetails({ ...details, username: e.target.value })
							}
							value={details.username}
						/>
						{errors.username && <p>{errors.username}</p>}
					</div>

					<div className="form-group">
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							username="password"
							id="password"
							placeholder="Enter your password"
							onChange={(e) =>
								setDetails({ ...details, password: e.target.value })
							}
							value={details.password}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>
				</div>
				<input type="submit" value="Sign In Now!" />
				<div>
					<Link
						to="/register"
						className="link"
						style={{ textDecoration: "none" }}
					>
						Click here to register
					</Link>
				</div>
			</form>
			<img src={plants} alt={""} className="threeplants" />
		</div>
	);
};

export default SignIn;
