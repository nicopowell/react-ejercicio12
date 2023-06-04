import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

const Formulario = ({ consultarAPI }) => {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");

  const handleChangeCategoria = (e) => {
    const categoriaSeleccionada = e.target.value;
    setCategoria(categoriaSeleccionada); // Actualiza el estado con la categoría seleccionada
    if (!categoriaSeleccionada) {
      console.log("nada");
      return;
    }
    consultarAPI(categoriaSeleccionada); // Llama a la función consultarAPI con el valor de la categoría
  };

  const handleChangePais = (e) => {
    const paisSeleccionado = e.target.value;
    setPais(paisSeleccionado); // Actualiza el estado con la categoría seleccionada
    if (!paisSeleccionado) {
      return;
    }
    consultarAPI(categoriaSeleccionada); // Llama a la función consultarAPI con el valor de la categoría
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="inputCategoria">
        <Form.Label column sm="2">
          Buscar por categoria
        </Form.Label>
        <Col sm="10" className="d-flex align-items-center">
          <Form.Select onChange={handleChangeCategoria} value={categoria}>
            <option>Opciones</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="top">Noticias destacadas</option>
            <option value="technology">Tecnología</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="inputPais">
        <Form.Label column sm="2">
          Buscar por país
        </Form.Label>
        <Col sm="10" className="d-flex align-items-center">
          <Form.Select onChange={handleOptionChange} value={pais}>
            <option>Opciones</option>
            <option value="ar">Argentina</option>
            <option value="es">España-</option>
            <option value="us">Estados Unidos</option>
            <option value="mx">Mexico</option>
            <option value="gb">Reino Unido</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
