import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CarouselComp = ({ title, image, description }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <Image
                            className="w-100"
                            src={image}
                            alt="First slide"
                            style={{height: '500px', width:'500px', backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat'}}
                        />
                    </Col>
                    <Col
                        md={6}
                        xs={12}
                        className=" w-100 plant-week homepage-top"
                    >
                        <h3>Plants of the Week</h3>
                        <p></p>
                        <h2 className='plant-title'>{title}</h2>
                        <p></p>
                        <p>
                            {description}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CarouselComp
