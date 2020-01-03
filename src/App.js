import React from 'react';
import{
  Container,
  Breadcrumb,
  Row,
  Col,
  Dropdown,
  Image,
  Figure,
  Carousel,
  ListGroup,
  InputGroup,
  Jumbotron,
  Button,
  Form,
  Modal,
  Badge


} from "react-bootstrap";

function App() {
  const [show,setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row style={{backgroundColor:"black"}}>

        <Col >
          <Dropdown>
            <Dropdown.Toggle variant="primary" >
             Pilih Bahasa
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Bahasa Indonesia</Dropdown.Item>
              <Dropdown.Item>English (US)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Col>
        <Col xs={8}></Col>
        <Col>
          <Figure>
            <Figure.Image
              width={35}
              heigth={35}
              alt="Nasi Padang"
              src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"/>
            <Figure.Caption style={{color:"white"}}>
              Alan Saputra
            </Figure.Caption>

          </Figure>
        </Col>
      </Row>
      <Row>
          <Col></Col>
          <Col>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/halaman-berita">Berita</Breadcrumb.Item>
            <Breadcrumb.Item href="/halaman-bola">Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>

      </Row>
      <br/>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src = "https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt = "Bola 1"
              />
              <Carousel.Caption>
                <h4>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia</h4>
                <h4>U-23 Tetap Bagus</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src = "https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt = "Bola 1"
              />
              <Carousel.Caption>
                <h4>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src = "https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt = "Bola 1"
              />
              <Carousel.Caption>
                <h4>Inggris Mau Jadi Tim Terbaik Dunia</h4>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Col>
        <Col></Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
            <ListGroup.Item>Divisi Primera</ListGroup.Item>
            <ListGroup.Item>Serie A</ListGroup.Item>
            <ListGroup.Item>Ligue 1</ListGroup.Item>
            <ListGroup.Item>Bundes Liga</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={5}>
          <InputGroup>
            <Jumbotron>
              <h2>DIVISI PRIMERA</h2>
              <p>Main Untuk Catalunya,Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </InputGroup>
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <Row>
                <Col></Col>
                <Col>
                  <Image
                    width={50} height={50} alt="user"
                    src="https://listimg.pinclipart.com/picdir/s/393-3937255_oic-provincial-statistics-officer-psa-maguindanao-user-icon.png"
                    roundedCircle
                  />
                </Col>
                <Col></Col>
              </Row>
              <h3 align="center">Silahkan Login</h3>
            </Form.Group>

            <Form.Group>
              <Form.Control type="email" placeholder="Masukkan Email" />
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>

            <Button variant="primary" onClick={handleShow} >
              Login
            </Button>

          </Form>

        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} animation={false}>
       <Modal.Header closeButton>
         <Modal.Title>Login</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <p>Anda Berhasil Login</p>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
         <Button variant="primary" onClick={handleClose}>
           Save Changes
         </Button>
       </Modal.Footer>
     </Modal>


    </Container>
  );
}

export default App;
