export default function validateInfo(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Username required";
	}

	// ASEL ALSO ADD YOUR FANCY SHMANSY ALERTS HERE AND IN ANALAGOUS STRUCTURES POR FAVOR BIG MAN !!!!
	// I've coded it such that the state updates dynamically (and covers all/most edge cases I can think of
	//hence taking so long to upload this as wanted it to be right) so as you type
	// in characters e.g. try entering in no fields or email with @ but no ending and you'll get different errors
	// in a smooth and concise way (hopefully lol) so may not need
	// additional alerts but we can discuss this morning ... cheers S xo
	//

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Invalid password entered!";
	}
	return errors;
}
