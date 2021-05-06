import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";

// potential more advanced alert after MVP

export default function AlertDismissible() {
	const [show, setShow] = useState(true);

	if (show) {
		return (
			<Alert variant="danger" onClose={() => setShow(false)} dismissible>
				<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
				<p>Password do not match!</p>
			</Alert>
		);
	}
	return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
