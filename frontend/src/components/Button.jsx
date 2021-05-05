import PropTypes from 'prop-types';

const Button = ({ text }) => {
	return (
		<div>
			<button className='font-link' style={{display: 'inline-block',
				border: 'none',
				// color:'#1cab7c',
				backgroundColor: 'transparent',
				padding: '10px 20px',
				margin: '5px',
				borderRadius: '5px',
				cursor: 'pointer'}}>{text}</button>
		</div>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Button;
