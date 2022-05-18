import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";
import {addToCart} from "../slices/cart";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


function Product({id, name, description, price, image}) {

    const dispatch = useDispatch();

    const onClickAddToBasket = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <Card className={'shadow-sm'}>
            <Card.Title> {name} </Card.Title>
            <Card.Img variant="top" src={image} />
            <Card.Body
            md={5}
            >
                <Card.Text
                >
                    {description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button
                        variant="submit"
                        onClick={() => onClickAddToBasket({"id": id, "name": name, "description": description, "price": price})}
                    >
                        Add
                    </Button>
                    <div className="text-price">
                        <font
                        >
                            {price}
                        </font>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
};

Product.defaultProps = {
    name: '---',
    description: "Some text",
    price: 0,
};

export default Product