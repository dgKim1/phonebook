import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';



function ContactForm() {
  const [name,setName] = useState("");
const [phoneNum,setphoneNum] = useState(0);
const dispatch = useDispatch();


const addContact =(event)=>{
  event.preventDefault();
  dispatch({type:"add_contact",payload:{name,phoneNum}})
}

  return (
    <div>
        <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event)=>setphoneNum(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
      
    </div>
  )
}

export default ContactForm
