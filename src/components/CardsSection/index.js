import { CardGroup} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function CardsSection() {
  return (
    <>
      <CardGroup className="card-main">
        <Card className="cards-indi">
          <Card.Title className="card-title-orange">Calabresa</Card.Title>
          <Card.Body className="cardsSection1"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
        <Card className="cards-indi">
          <Card.Title className="card-title-pink">
            Frango com Catupiry
          </Card.Title>
          <Card.Body className="cardsSection2"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
        <Card className="cards-indi">
          <Card.Title className="card-title-orange">A moda da casa</Card.Title>
          <Card.Body className="cardsSection3"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
        <Card className="cards-indi">
          <Card.Title className="card-title-pink">Pantaneira</Card.Title>
          <Card.Body className="cardsSection4"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup className="card-main">
        <Card className="cards-indi">
          <Card.Title className="card-title-orange">
            Strogonoff de frango
          </Card.Title>
          <Card.Body className="cardsSection5"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
        <Card className="cards-indi">
          <Card.Title className="card-title-pink">4 Queijos</Card.Title>
          <Card.Body className="cardsSection6"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
        <Card className="cards-indi">
          <Card.Title className="card-title-orange">Portuguesa</Card.Title>
          <Card.Body className="cardsSection7"></Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Molho de tomate, mussarela,calabresa fatiada, cebola, azeitona e
              orégano.
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
