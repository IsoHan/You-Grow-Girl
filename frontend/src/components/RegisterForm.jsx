import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import plants from "../images/threeplants.png";
import axiosInstance from "./axiosFetch";

function Register({ username, email, password, password2, error }) {
	const history = useHistory();
	const [details, setDetails] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();

		axiosInstance
			.post("/token", {
				username: details.username,
				email: details.email,
				password1: details.password1,
				password2: details.password2,
			})
			.then((res) => {
				history.push("/allplants/");
				console.log(res);
				console.log(res.data);
			});
	};

	return (
		<div className='font-link'>
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
							username="password1"
							id="password1"
							onChange={(e) =>
								setDetails({ ...details, password1: e.target.value })
							}
							value={details.password1}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Confirm Password: </label>
						<input
							type="password"
							username="password2"
							id="password2"
							onChange={(e) =>
								setDetails({ ...details, password2: e.target.value })
							}
							value={details.password2}
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
