import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

const Formulario = ({consultarAPI}) => {
  const [categoria, setCategoria] = useState("");

 const handleOptionChange = (event) => {
    const categoriaSeleccionada = event.target.value;
    setCategoria(categoriaSeleccionada); // Actualiza el estado con la categoría seleccionada
    if (categoriaSeleccionada === "Opciones") {
      return; // No hace nada si se selecciona "Opciones"
    }
    consultarAPI(categoriaSeleccionada); // Llama a la función consultarAPI con el valor de la categoría
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="inputFormulario">
        <Form.Label column sm="2">
          Buscar por categoria
        </Form.Label>
        <Col sm="10" className="d-flex align-items-center">
          <Form.Select onChange={handleOptionChange} value={categoria}>
            <option>Opciones</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="top">Noticias destacadas</option>
            <option value="technology">Tecnología</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
