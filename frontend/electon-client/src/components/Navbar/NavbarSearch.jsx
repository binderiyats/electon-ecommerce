import { Form, InputGroup, Button } from "react-bootstrap";

export const NavbarSearch = () => {
  return (
    <InputGroup className="searchInput mx-auto ">
      <Form.Control placeholder="Search any things" />
      <Button variant="outline-light">Search</Button>
    </InputGroup>
  );
};

// mx-auto mx-md-0 my-auto order-3 order-md-2
