import React from "react";
import {Card} from "react-bootstrap";
import Rating from "./Rating";
 
function Product({product}){
    return(
<>
    <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top"/>
            </a>

        <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Text as="div"><strong>{product.name}</strong></Card.Text>
            </a>
        </Card.Body>   

        <Card.Text as="div">
            <Rating value={product.Rating} text={`${product.numReviews} reviews`}/>
        </Card.Text> 

        <Card.Text as="h3">${product.price}</Card.Text>
    </Card>


</>
    )
}

export default Product;