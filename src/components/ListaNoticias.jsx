import React from 'react';
import { Row } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) => {
  const crearNoticias = () => {
    return noticias.map((noticia, index) => (
      <Noticia key={index} noticia={noticia} />
    ));
  };
  
  return (
    <Row>
      {crearNoticias()}
    </Row>
  );
};

export default ListaNoticias;