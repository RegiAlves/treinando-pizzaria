import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Face from "../../svg/Face";
import Insta from "../../svg/Insta";
import Whats from "../../svg/Whats";



export default function NavMenu(){
  return(
    <Navbar expand="lg">
    <Container fluid className="App-container">
      <Navbar.Brand href="#"  >Logo</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <NavDropdown title="Cardapio" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Pizzas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
             Esfihas
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Bebidas
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2">Endereço</Nav.Link>
          <Nav.Link href="#">Promoções</Nav.Link>
          <Nav.Link href="#">Contato</Nav.Link>
        </Nav>
        <div className="incos">
          <Face />
          <Insta/>
          <Whats/>
          
       
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}