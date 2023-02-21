import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../Components/navbars";

const Main = () => {
return (         
    <>
    <NavBar></NavBar>
    <Container fluid="md">
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Container>

    </>
);
}
export default Main;