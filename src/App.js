import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavMenu/index";
import "./App.css";
import { Card } from "react-bootstrap";
import CardsSection from "./components/CardsSection/index";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="App-header">
        <NavMenu />
      </header>
      <div className="App">
        <Card>
          <Card.Body className="card-banner"></Card.Body>
        </Card>
        <br />
        <h3>As pizzas mais pedidas</h3>
        <CardsSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
