import React from "react";
import { Card , CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import UserSession from "constants/UserSession";
import { LoginForm } from "components/Auth/LoginForm";
import { RegisterForm } from "components/Auth/RegisterForm";
import { dash_home_url } from "constants/endpoints";



var ps;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    email: "",
    password: "",
    showForm: 'login'
  };
  }
mainPanel = React.createRef();
componentWillMount(){
    
    if(UserSession.getItem("isLoggedIn")){
        window.location = dash_home_url;
    }
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
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }


  
  signInWithEmailAndPasswordHandler = (event) => {
    event.preventDefault();
    this.validateUser(isValid => {
      if (isValid) {
        this.setState({ signingIn: true })
          .then(result => {
            this.setState({ signingIn: false });
            // UserProvider.user = result.user.uid;
            if (result) {
              const { user } = result;
              // save the user object in the redux store
              this.props.setUser(user);
              // save the user's UID in session
              UserSession.setItem("UID", "7");
              // navigate to dashboard
              this.props.history.push("/admin/dashboard");
            }
          }).catch(error => {
            
          })
      } else {
                
        }
    });
  };

  login(data){
      console.log("LOGIN", data);
      UserSession.setItem("isLoggedIn", true)
      this.props.history.push('/admin/dashboard')
      
  }

  render() {
    return (
  <>
   <div style={{ height: "100vh", background: "#61dafb", backgroundSize: "cover" }}>
          <div className="hero-overlay"></div>
          <div className="main-panel0 " ref={this.mainPanel} >
            <div className="container border-0">
              <div className="row border-0 py-5 full-container" style={{justifyContent: "center", marginTop: 40}}>
                  {this.state.showForm == 'login' && <LoginForm login={(data) => this.login(data) } showRegister={() => this.setState({showForm: 'register'})}/> }
                  {this.state.showForm == 'register' && <RegisterForm register={(data) => console.log("registering", data) }  showLogin={() => this.setState({showForm: 'login'})}/>}
              </div>
            </div>
          </div>
        </div>
        
  </>
);
};
}

export default Login;