import React, { useState } from "react";
import { Link } from "react-router-dom";
import plants from "../images/threeplants.png";

function Register({ Login, error }) {
	const [details, setDetails] = useState({
		username: "",
		password: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();

		Login(details);
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2>Register</h2>
					{error != "" ? <div className="error">{error}</div> : ""}
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
							username="email"
							id="email"
							onChange={(e) =>
								setDetails({ ...details, username: e.target.value })
							}
							value={details.username}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Create Password: </label>
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
					<div className="form-group">
						<label htmlFor="password">Confirm Password: </label>
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
			<img src={plants} alt={""} className="threeplants" />
		</>
	);
}

export default Register;
