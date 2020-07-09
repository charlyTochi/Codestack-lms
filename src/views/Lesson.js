import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, FormGroup, Label,  FormText,  NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Card, Button, CardTitle, CardText, Row, Col, CardBody, CardSubtitle, CardImg, Input } from 'reactstrap';
import classnames from 'classnames';
import { Link } from "react-router-dom";
import PanelHeader from 'components/PanelHeader/PanelHeader';
import { Document, Page } from 'react-pdf';
import pdfFile from '../assets/files/chemistry.pdf';

import logoImg from "../assets/img/img1.png";


const Lesson = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
  
    <div>
    <PanelHeader />

      <Nav tabs sm="12" style={{backgroundColor: "#192d3e",color: "white"}}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            >
            Lesson
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Videos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Assignments
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Attachments
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Quiz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
            Results
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
      <Col sm="12" style={{marginLeft: 20, backgroundColor: "#192d3e"}}>
        <Card body style={{backgroundColor: "#192d3e"}}>
          {/* <h5 style={{color: "white"}}>Definition</h5> */}
          <CardText>           
           <img src={logoImg} alt={"[IMAGE]"} className="img-responsive mx-auto" style={{marginLeft: 20, width: 900, margin: "auto" }} />

      </CardText>
           {/* <Link to="/admin/available-subjects" className="nav-link">
              <div style={{textAlign: "right"}}>
                <Button disabled style={{background: "#61dafb",justifyContent: 'center', alignItems: 'center'}} onClick={toggle}>NEXT</Button>
             </div>
            </Link> */}
        </Card>
      </Col>
    </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row sm="12" style={{backgroundColor: "#192d3e"}}>
      <Col sm="6">
        <video width="400" height="350" controls poster= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"> 
          <source src= "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
            type="video/mp4"> 
          </source>
        </video>
      </Col>
      <Col sm="6">
        <video width="400" height="350" controls poster= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"> 
          <source src= "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
            type="video/mp4"> 
          </source>
      </video>     
      </Col>
      </Row>
      <Row sm="12" style={{backgroundColor: "#192d3e"}}>
      <Col sm="6">
        <video width="400" height="350" controls poster= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"> 
          <source src= "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
            type="video/mp4"> 
          </source>
       </video>     
      </Col>
      <Col sm="6">
        <video width="400" height="350" controls poster= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"> 
          <source src= "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
            type="video/mp4"> 
          </source>
      </video> 
      </Col>
      </Row>
        </TabPane>
          <TabPane tabId="3">
              <Row style={{backgroundColor: "#192d3e"}}>
            <Col sm="12">
              <Card body  style={{backgroundColor: "#192d3e"}}>
                <h5 style={{color: "white"}}>Questions</h5>
                <CardText  style={{color: "white"}}>1. Use Original Biology Assignment Research to define arist</CardText>
                <CardText style={{color: "white"}}>2. Use Standard Biology Assignment Structure to define arist</CardText>
                <CardText style={{color: "white"}}>3. Find Precise and Credible sources to define arist</CardText>
                <CardText style={{color: "white"}}>4. Use Original Biology Assignment Research to define arist</CardText>
                <CardText style={{color: "white"}}> 5. Use Original Biology Assignment Research to define arist</CardText>
                   <div style={{textAlign: "right"}}>
                   <Button style={{background: "#000034",justifyContent: 'center', alignItems: 'center'}} onClick={toggleModal}>Submit Assignment</Button>
                  </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
              <Row>
            <Col sm="12" style={{backgroundColor: "#192d3e"}}>
              <Card body  style={{backgroundColor: "#192d3e"}}>
                <CardTitle style={{color: "white"}}>Below are some links to educational materials </CardTitle>
                   <Col sm={10}>
                   <div>
                   <div className = "App">
                     <a style={{color: "white"}} href = {pdfFile} target = "_blank">Click to Download Pdf</a>
                   </div>
                    </div>
                    </Col>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
              <Row>
            <Col sm="12">
              <Card body  style={{backgroundColor: "#192d3e"}}>
                <CardTitle style={{color: "white"}}>It's Quiz time</CardTitle>
                <CardText style={{color: "white"}}>1. What is the heart doing? </CardText>
                <CardText style={{color: "white"}}>2. Which side of the heart is stronger ( more muscle )? </CardText>
                <CardText style={{color: "white"}}>3. Does the heart has valves? </CardText>
                <CardText style={{color: "white"}}>4. What is the task of white blood cells? </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="6">
              <Row>
            <Col sm="12">
              <Card body style={{backgroundColor: "#192d3e"}}>
                <CardTitle style={{color: "white"}}>Good Luck With Your Result</CardTitle>
                <CardText style={{color: "white"}}>Congratulations you passed all courses</CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      {/* //this is the modal used to submit assignment  */}
      <Modal isOpen={modal} toggle={toggleModal} >
        <ModalHeader toggle={toggleModal}>Kindly Upload Your document</ModalHeader>
        <ModalBody>
        sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Lesson;