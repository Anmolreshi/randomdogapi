import React from "react";
import axios from "axios";
import "./styles.css";
import { Button, Col, Container, Row } from "reactstrap";

export default class App extends React.Component {
  state = { active: "" };
  componentDidMount() {
    this.getapi();
  }
  getapi = () => {
    // const id= Math.floor(Math.random() * 100) - 1
    // axios.get(`https://api.adviceslip.com/advice/${id}`)
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        // var data = JSON.parse(response.data + "}");
        const { message } = response.data;
        console.log("Data", response);
        this.setState({ active: message });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  render() {
    const { active } = this.state;
    return (
      <div>
        <Container>
          <div className="box">
            <Row className="text box1">Random Dog Images</Row>
          </div>
          <div>
            <Row className="para">
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                The domestic dog is a domesticated wolf. The dog descended from
                an ancient, extinct wolf,with the modern grey wolf being the
                dog's nearest living relative. The dog was the first species to
                be domesticated, by hunter–gatherers over 15,000 years ago,
                before the development of agriculture. This is the collection of
                all images served by Dog API sorted by breed. The Api is taken
                from
                <b>
                  {" "}
                  <a href="https://dog.ceo/dog-api/"> Dog API </a>.
                </b>
              </Col>
            </Row>
          </div>
          <Row className="section">
            <Col xl={4} lg={4} sm={4} xs={12}>
              <Button className="btn" color="danger" onClick={this.getapi}>
                Fetch Image
              </Button>
            </Col>
            <Col xl={4} lg={5} sm={6} xs={12} className="imagedog section">
              <img
                style={{ height: "280px", width: "280px" }}
                alt="dog"
                src={active}
              />
            </Col>
            <Col xl={4} lg={2} sm={2} xs={12}></Col>
          </Row>
          <hr />
          <Row>
            <Col className="App">
              Made by &copy; Copyright<b> Anmol Reshi</b> 2021
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
