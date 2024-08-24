
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './Components/ContactForm';
import { Col, Container, Row } from 'react-bootstrap';
import ContactList from './Components/ContactList';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col><ContactForm/></Col>
          <Col><ContactList/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
