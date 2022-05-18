import {Container, Row, Col, Button} from "react-bootstrap";

const fontStyle = {
    'verticalAlign': 'inherit;'
}


function Home () {
    return (
        <>
            <Container text-center="true">
                <Row className="py-lg-5">
                    <Col lg={6} md={8} className="mx-auto">
                        <h1 className="fw-light"><font style={ fontStyle }><font
                            style={ fontStyle }>Hey!</font></font></h1>
                        <p className="lead text-muted"><font style={ fontStyle }><font
                            style={ fontStyle }>Our pet shop "KOTIK" cooperates with the shelter "RAY". If you
                            have long wanted to have your best furry friend next to you, below you can see some of the
                            profiles of animals that are looking for a home. Also we would be very grateful for your
                            help.</font></font></p>
                        <p>
                            <Button
                                variant="primary"
                                href="https://rayfund.ru/animals/"
                                className="my-3"
                            >
                                Looking for a home
                            </Button>
                            <Button
                                variant="success"
                                href="https://rayfund.ru/get_involved/"
                                className="my-3"
                            >
                                Help
                            </Button>
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="container text-center">
                <h1 className="h3 mt-1 mb-3">Photo from "RAY"</h1>

                <div id="carousel" className="carousel slide d-inline-block" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid"
                                 src="https://rayfund.ru/wp-content/uploads/2021/02/Finik_4-768x512.jpg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid"
                                 src="https://rayfund.ru/wp-content/uploads/2021/02/IMG_0607-768x440.jpg" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid"
                                 src="https://rayfund.ru/wp-content/uploads/2021/01/Pinya1-1-745x420.jpg" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>


            <script src="/examples/vendors/jquery/jquery-3.3.1.min.js"></script>
            <script src="/examples/vendors/popper.js/popper.min.js"></script>
        </>
)
}

export default Home;