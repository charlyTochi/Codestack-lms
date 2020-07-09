import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { Nav, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, Modal,  ModalHeader, ModalBody, ModalFooter,
  NavbarText, Row, Col, } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logoImg from "../../assets/img/logo.png";

var ps;
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
    this.activeRoute.bind(this);
  }


  toggleModal = () => this.setState({modal: !this.state.modal});


  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen
      }
    })
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }

  render() {
    return (
      <div className="sidebar" style={{backgroundColor: "#192d3e"}}>
        <div className="logo" style={{ backgroundColor: "#192d3e", textAlign: "center" }}>
          <Link to={"/"} className="mt-3"><br/><br/>
            <img src={logoImg} alt={"[IMAGE]"} className="img-responsive mx-auto" style={{ marginLeft: 20, width: 100,  }} />
          </Link><br/><br/>
          <h6 style={{color: "white"}}>LEARNING MANAGEMENT SYSTEM</h6>
        </div>
       <div className="sidebar-wrapper" ref="sidebar" style={{ backgroundColor: "#192d3e" }}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              if(prop.type && prop.type == 'dropdown'){
                return (
                  <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className={"mx-0 px-3"} style={{borderRadius: 0, color: "#61dafb"}}>
                        {prop.name}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {prop.children.map(sublink => (
                          <DropdownItem onClick={this.toggleModal}>
                          {sublink.name}
                        </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                )
              }else{
                return (
                  <li
                    className={
                      this.activeRoute(prop.layout + prop.path) +
                      (prop.pro ? " active active-pro" : "")
                    } style={{ color: "#61dafb" }}
                    onClick={() => {
                      prop.pro ? this.props.logout() // handle logout
                        :
                        prop.action && this.props.handleAction(prop.action) //handle other actions
                    }}
                    key={key}
                  >
                    <NavLink
                      to={!prop.pro && prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                      style={{ borderRadius: 0, margin: 0, color: "#61dafb" }}
                    >
                      <i className={"now-ui-icons " + prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              }
            })}
          </Nav>
        </div>


        <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Please Select Subject</ModalHeader>
        <ModalBody>
          <Row xs={12}>
              <Col xs={4}>
                <Link to="/admin/lesson" className="nav-link" >
                <Button style={{width: "100%",  backgroundColor: "#61dafb"}} className="btn btn-success bg-midnight" onClick={this.toggleModal} >Chemistry</Button>{' '}
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="/admin/lesson" className="nav-link" >
                <Button style={{width: "100%", backgroundColor: "#61dafb"}} className="btn btn-success bg-midnight" onClick={this.toggleModal} >Agric</Button>{' '}
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="/admin/lesson" className="nav-link" >
                <Button style={{width: "100%", backgroundColor: "#61dafb"}} className="btn btn-success bg-midnight" onClick={this.toggleModal} >Physics</Button>{' '}
                </Link>
              </Col>
            </Row>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

export default Sidebar;
