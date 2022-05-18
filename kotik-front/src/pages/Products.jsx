import {Col, Container, Row} from "react-bootstrap";
import {Product} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {retrieveTutorials} from "../slices/products";

const Products = (props) => {
    const products = useSelector(state => state.products)

    const dispatch = useDispatch();
    const location = useLocation();
    const initFetch = useCallback((type) => {
        dispatch(retrieveTutorials({ type: type }));
    }, [dispatch])

    useEffect(() => {
        initFetch(location.pathname.replace("/", ""))
    }, [initFetch, location])


    return (
        <div className="album py-5">
            <Container>
                <Row sm={2} md={3} className="g-3">
                        { products && products.map((obj) => (
                            <Col mt={5} style={{ maxWidth: "70%"}}>
                            <Product
                                key={obj.id}
                                id={obj.id}
                                name={obj.name}
                                description={obj.description}
                                price={obj.price}
                                image={obj.image}
                            />
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
}

export default Products;