import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Hanbyoul/hanbyoulH-M/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <h3>₩{product?.price}</h3>
          <span className="conscious ">
            {product?.choice == true ? "Conscious choice" : ""}
          </span>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{product?.size[2]}</Dropdown.Item>
          </DropdownButton>
          <Button className="detail-btn" variant="dark">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
