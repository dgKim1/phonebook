import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function SearchBox() {
 const [keyword, setKeyword] = useState("");
 const dispatch = useDispatch();
 const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
  
}

export default SearchBox;
