import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Link } from "react-router-dom";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";
import { Modal, ModalHeader, ModalFooter, Button, ModalBody, Row, Col,  } from "reactstrap";
import { sessionChecker } from "services/utils";
import { home_url, login_url } from "constants/endpoints";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import UserSession from "constants/UserSession";

var ps;

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
    }
  }
  mainPanel = React.createRef();
  componentWillMount() {
    // check if the user has an active session
    // sessionChecker(isValid => {
      if (!UserSession.getItem("isLoggedIn")) {
        window.location = login_url;
      } 
    // });
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({ backgroundColor: "color" });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
          handleAction={(action) => this.handleAction(action)}
          logout={() => this.setState({ showLogout: true })}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Modal isOpen={this.state.showLogout} toggle={() => this.setState({ showLogout: false })} className="modal-dialog-centered invoice-modal">
            <ModalHeader toggle={() => this.setState({ showLogout: false })}>Please Select Subject</ModalHeader>
            <ModalBody>
            <Row xs={12}>
                <Col xs={4}>
                  <Link to="/admin/lesson" className="nav-link" >
                  <Button style={{width: "100%"}} className="btn btn-success bg-midnight" onClick={() =>this.setState({ showLogout: false })} >Biology</Button>{' '}
                  </Link>
                </Col>
                <Col xs={4}>
                  <Link to="/admin/lesson" className="nav-link" >
                  <Button style={{width: "100%"}} className="btn btn-success bg-midnight" onClick={() =>this.setState({ showLogout: false })} >Chemistry</Button>{' '}
                  </Link>
                </Col><Col xs={4}>
                  <Link to="/admin/lesson" className="nav-link" >
                  <Button style={{width: "100%"}} className="btn btn-success bg-midnight" onClick={() =>this.setState({ showLogout: false })} >Physics</Button>{' '}
                  </Link>
                </Col>
            </Row>
            <Row xs={12}>
                <Col xs={4}>
                  <Link to="/admin/lesson" className="nav-link" >
                  <Button style={{width: "100%"}} className="btn btn-success bg-midnight" onClick={() =>this.setState({ showLogout: false })} >Geography</Button>{' '}
                  </Link>
                </Col>
                <Col xs={4}>
                  <Link to="/admin/lesson" className="nav-link" >
                  <Button style={{width: "100%"}} className="btn btn-success bg-midnight" onClick={() =>this.setState({ showLogout: false })} >Economics</Button>{' '}
                  </Link>
                </Col><Col xs={4}>
                  <Link to="/admin/lesson" className="nav-link" >
                  <Button style={{width: "100%"}} className="btn btn-success bg-midnight" onClick={() =>this.setState({ showLogout: false })} >Reaer</Button>{' '}
                  </Link>
                </Col>
            </Row>
            </ModalBody>
          </Modal>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
