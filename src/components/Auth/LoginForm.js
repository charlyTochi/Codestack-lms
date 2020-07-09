import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

export const LoginForm = (props) => {
    const [state, setState] = useState({
        regNo: '',
        password: ''
    })

    return(
        <div className="p-6 bg-white" >
            <Row >
                <Col md={6} className="p-3 p-md-5 m-0" >
                <h3 className="fa-3x whitish-text title mb-0">LOGIN</h3>
                    <span>Kindly login to gain access to our features</span><br/><br/>
                    <Form onSubmit={props.login}>
                        <FormGroup>
                            <Label>Registration No.</Label>
                            <Input type="text" defaultValue={state.regNo} onchange={(e) => setState({...state, regNo: e.target.value})} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" defaultValue={state.password} onchange={(e) => setState({...state, password: e.target.value})} required/>
                        </FormGroup>
                        <FormGroup>
                            <Button style={{  width: "100%", background: "#61dafb",padding: "14px 28px",fontSize: "16px",color: "black"}} type="submit">Login</Button>
                        </FormGroup>
                    </Form>
                </Col>
                <br/>
                <br/>
                <Col md={6} className="m-0 p-5 align-center"  style={{background: "#0e1b27"}}><br/>
                    <img src={require('../../assets/img/logo.png')} style={{ marginLeft: 50, width: 200, height: 120}}  /><br/><br/><br/><br/><br/><br/>
                    <span style={{color: "white"}}>Kindly click the button below to register</span><br />
                    <Button style={{  width: "100%", background: "white",padding: "14px 28px",fontSize: "16px",color: "black"}}   class="block" onClick={props.showRegister}>REGISTER</Button>
                </Col>
            </Row>
        </div>
    )
}