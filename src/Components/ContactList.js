import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';




function ContactList() {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox/>
      <div className='contact-list'>
        num: {filteredList.length}
      {
        filteredList.map((item) => (
          <ContactItem item={item}/>
        ))
      }
      </div>
    </div>

  );
}

export default ContactList;
