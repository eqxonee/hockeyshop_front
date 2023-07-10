import React from 'react';
import {Card, Col, Image} from "antd";
import Meta from "antd/es/card/Meta";
import {NavLink} from "react-router-dom";

const CategoriesList = ({categories}) => {
    return (
        <Col style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}
             span={24}>
            {
                categories.map(category => {
                    return (
                            <Card
                                style={{width: "140px"}}
                                cover={<Image alt="purchase" src={category.picturePath}/>}
                                hoverable={false}>
                                <Meta
                                    title={category.name}
                                    description={<NavLink to={"/category/" + category.id}>Подробнее</NavLink>}/>
                            </Card>
                    )
                })
            }
        </Col>


    );
};

export default CategoriesList;