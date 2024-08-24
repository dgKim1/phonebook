import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';


function ContactList() {
  const contactList = useSelector((state)=>state.contactList);
  const [name,setName] = useState("");
  return (
    <Row>
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" id="findName"/>
        </Col>
        <Col lg={2}>
            <Button onClick={()=>setName(document.getElementById("findName").value)}>찾기</Button>
        </Col>
        {
        name===""? contactList.map((item)=>(<ContactItem item={item}/>)) : contactList.filter((item)=>item.name === name).map((item)=>(<ContactItem item={item}/>))
        }

    </Row>
  )
}

export default ContactList
