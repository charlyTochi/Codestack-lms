import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class User extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content" style={{ backgroundColor: "#192d3e"}}>
          <Row>
            <Col md="8" >
              <Card style={{ backgroundColor: "#61dafb"}}>
                <CardHeader>
                  <h5 className="title" style={{ color: "white"}}>Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label style={{ color: "white"}}>Title</label>
                          <Input
                            defaultValue="Master"
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label style={{ color: "white"}}>Username</label>
                          <Input
                            defaultValue="michael23"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label style={{ color: "white"}} htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                            
                          <Input placeholder="Email" type="email" defaultValue="master@gmail.com" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label style={{ color: "white"}}>First Name</label>
                          <Input
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label  style={{ color: "white"}}>Last Name</label>
                          <Input
                            defaultValue="Andrew"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label  style={{ color: "white"}}>Registration Number</label>
                          <Input
                            defaultValue="4238461238947918479"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label style={{ color: "white"}}>City</label>
                          <Input
                            defaultValue="Ikeja"
                            placeholder="Ikeja"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label  style={{ color: "white"}}>Country</label>
                          <Input
                            defaultValue="Nigeria"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label  style={{ color: "white"}}>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number"   defaultValue="100001"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label  style={{ color: "white"}}>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="A guy with prospects"
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/bg5.jpg")} />
                </div>
                <CardBody style={{ backgroundColor: "#61dafb"}}>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title" style={{ color: "white"}}>Mike Andrew</h5>
                    </a>
                    <p className="description" style={{ color: "white"}}>michael24</p>
                  </div>
                  <p className="description text-center" style={{ color: "white"}}>
                    "A guy with prospects"
                  </p>
                </CardBody>
                <div className="button-container" style={{color: "white", backgroundColor: "#61dafb"}}>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    style={{ backgroundColor: "#61dafb"}}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-facebook-f" style={{ color: "white"}}/>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    style={{ backgroundColor: "#61dafb"}}
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter" style={{ color: "white"}}/>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#pablo"
                    style={{ backgroundColor: "#61dafb"}}
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-google-plus-g" style={{ color: "white"}} />
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
