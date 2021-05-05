import React, { useState } from "react";
import { Link } from "react-router-dom";
import plants from "../images/threeplants.png";
import axiosInstance from "./axiosFetch";

function SignIn({ Login, error }) {
	const [details, setDetails] = useState({
		username: "",
		password: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className="font-link">
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2 className="page-title">
						<b>Sign In</b>
					</h2>
					{error !== "" ? <div className="error">{error}</div> : ""}
					<div className="form-group">
						<label htmlFor="username">Username:</label>
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
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							username="password"
							id="password"
							onChange={(e) =>
								setDetails({ ...details, password: e.target.value })
							}
							value={details.password}
						/>
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
}

export default SignIn;
