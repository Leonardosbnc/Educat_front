import React from "react";
import "./App.css";
import {
  Button,
  Navbar,
  Nav,
  Form,
  Col,
  Row,
  Container,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import api from "./services/api";

function App() {

  const { register, handleSubmit } = useForm();


  function Save(data) {
    api.post("/save",  data ).then((res) => {
      if (res.data.success) {
        alert("Cadastro sucesso");
        window.location.href = "./";
      }
    });
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <img
          src="../public/img/icon-logo.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />

        <Nav className="mr-auto">
          <Nav.Link href="#home">Formulário</Nav.Link>
          <Nav.Link href="#features">Relatórios</Nav.Link>
        </Nav>
      </Navbar>
      <div className="form">
        <Form onSubmit={handleSubmit(Save)}>
          <Container>
            <br />
            <br />
            <Form.Row>
              <Form.Group as={Col} controlId="formGridNome">
                <Form.Label>
                  <i>
                    <b>Nome Completo:</b>
                  </i>
                </Form.Label>
                <Form.Control
                  name="client_name"
                  placeholder="Nome Completo"
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTelefone">
                <Form.Label>
                  <i>
                    <b>Telefone:</b>
                  </i>
                </Form.Label>
                <Form.Control
                  name="cel_number"
                  type="number"
                  placeholder="Celular"
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSociedade">
                <Form.Label>
                  <i>
                    <b>Sociedade:</b>
                  </i>
                </Form.Label>
                <Form.Control name="client_association" as="select" ref={register({ required: true })}>
                  <option>Default select</option>
                  <option>SBNEURO</option>
                  <option>SBC</option>
                  <option>SBPT</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridData">
                <Form.Label>
                  <i>
                    <b>Data:</b>
                  </i>
                </Form.Label>
                <Form.Control
                  name="date"
                  type="date"
                  placeholder="Data"
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHinicio">
                <Form.Label>
                  <i>
                    <b>Hora de Início:</b>
                  </i>
                </Form.Label>
                <Form.Control name="begin_time" type="time" ref={register({ required: false })} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHfim">
                <Form.Label>
                  <i>
                    <b>Hora de Fim:</b>
                  </i>
                </Form.Label>
                <Form.Control name="end_time" type="time" ref={register({ required: false })} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridID">
                <Form.Label>
                  <i>
                    <b>ID do teamviewer/Anydesk:</b>
                  </i>
                </Form.Label>
                <Form.Control name="teamviewer_id" type="number" ref={register({ required: true })} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridProblema">
                <Form.Label>
                  <i>
                    <b>Qual o problema:</b>
                  </i>
                </Form.Label>
                <FormControl name="problem" as="textarea" rows={5} ref={register({ required: true })} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCheck">
                <Form.Label as="legend" column sm={2}>
                  Status:
                </Form.Label>
                <Col>
                  <Form.Check
                   ref={register({ required: true })} 
                    type="radio"
                    label="Concluído"
                    name="status"
                    id="concluido"
                    value="concluido"
                  />
                  <Form.Check
                   ref={register({ required: true })} 
                    type="radio"
                    label="Adiado"
                    name="status"
                    id="adiado"
                    value="adiado"
                  />
                  <Form.Check
                    ref={register({ required: true })} 
                    type="radio"
                    label="Não Concluído"
                    name="status"
                    id="nConcluido"
                    value="nConcluido"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFeito">
                <Form.Label>O que foi feito:</Form.Label>
                <FormControl name="done" as="textarea" rows={5} ref={register({ required: true })} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFeito">
                <Form.Label>Observações:</Form.Label>
                <FormControl name="obs" as="textarea" rows={3}  ref={register({ required: false })} />
              </Form.Group>
            </Form.Row>

            <Button variant="success" type="submit">
              Salvar
            </Button>

            <Button as="input" type="reset" value="Apagar" variant="danger" />
          </Container>
        </Form>
      </div>
    </div>
  );
}

export default App;
