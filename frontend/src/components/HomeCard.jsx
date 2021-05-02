import Image from 'react-bootstrap/Image';

const HomeCard = ({ image, text }) => {
    return (
        <div className='homecard'>
            <Image src={image} alt='' className='homecard-img'/>
            <p></p>
            <h6>{text}</h6>
        </div>
    )
}

export default HomeCard
