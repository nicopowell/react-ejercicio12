import React from "react";
import { Card, Col } from "react-bootstrap";
import "./noticias.css";

const Noticia = ({ noticia }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mb-4">
      <Card className="cardContainer">
        <Card.Img variant="top" src={noticia.image_url} />
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1">
            <h6 className="pb-2">{noticia.source_id}</h6>

            <Card.Title>{noticia.title}</Card.Title>
            <Card.Text className="text-secondary ajustarTexto">{noticia.description}</Card.Text>
          </div>
          <div>
            <hr />
            <a className="btn btn-primary w-100 py-2" href={noticia.link}>
              Ver noticias completas
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
