import React from 'react';
import {Card, Col, Image} from "antd";
import Meta from "antd/es/card/Meta";


const ProductsInCategoriesList = ({products}) => {

    return (
        <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}
             span={24}>
            {
                products.map(product => {
                    return (
                        <Card
                            style={{width: "140px"}}
                            cover={<Image alt="purchase" src={product.picturePath}/>}
                            hoverable={false}>
                            <Meta
                                title={product.name}
                                description={product.description}/>
                        </Card>
                    )
                })
            }
        </Col>


    );
};

export default ProductsInCategoriesList;