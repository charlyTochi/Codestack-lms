import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  CardText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import CardComponent from "components/Card/CardComponent";

class Dashboard extends React.Component {
  render() {
    return (
      <>
       <PanelHeader />
        <div className="content" style={{ backgroundColor: "#192d3e"}}>
        <Row>
          <Col sm="4" outline color="success">
           <CardComponent title="QUIZ COMPLETED" value="433"/>
          </Col>
          <Col sm="4" outline color="success">
           <CardComponent title="CURRENT CLASS" value="100"/>
          </Col>
          <Col sm="4" outline color="success">
           <CardComponent title="ASSESEMENT COMPLETED" value="100"/>
          </Col>
       </Row>
       <Row>
          <Col sm="4" outline color="success">
          <CardComponent title="ASSIGNMENT COMPLETED" value="389"/>
          </Col>
          <Col sm="4" outline color="success">
          <CardComponent title="FAILED COURSES" value="230"/>
          </Col>
          <Col sm="4" outline color="success">
          <CardComponent title="PASSED COURSES" value="130"/>
          </Col>
       </Row>

       <h4 style={{ height: 100, fontSize: 30, alignItems: "center", marginBottom: -30, justifyContent: "center", backgroundColor: "#61dafb", textAlign: "center"}}>RECENT ACTIVITIES</h4>
       <Table style={{ backgroundColor: "#61dafb"}}>
      <thead>
        <tr style={{ backgroundColor: "#61dafb"}}>
          <th>Activity Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ backgroundColor: "#61dafb"}}>
          <td>Account Login</td>
          <td>Wednesday June 13</td>
        </tr>
        <tr style={{ backgroundColor: "#61dafb"}}>
          <td>Profile Edited</td>
          <td>Thursday March 24</td>
        </tr>
        <tr style={{ backgroundColor: "#61dafb"}}>
          <td>Account Logout</td>
          <td>Tuesday November 11</td>
        </tr>
      </tbody>
    </Table>
      
         
        </div>
      </>
    );
  }
}

export default Dashboard;
