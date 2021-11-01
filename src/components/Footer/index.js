import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Card className="footerMain">
        <Card.Header className="headerFooter">Se preferir faça seu pedido por telefone (11) 95458-8569</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Atendimento:<br/>
              Terça a Domingo<br/>
              Das 18H Às 23H
              .{" "}
            </p>
            <footer className="blockquote-footer">
              Imagens <cite title="Source Title">ilustrativas</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
