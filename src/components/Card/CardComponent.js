import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader
} from 'reactstrap';

const CardComponent = (props) => {
  return (
     <Card body style={{height: "80%", backgroundColor: "white"}}>
        <CardHeader>
        <h6 style={{color: "#192d3e", textAlign: "center"}}>{props.title}</h6>
        </CardHeader>
        <h1 style={{color: "#192d3e", textAlign: "center"}}>{props.value}</h1>
      </Card>
  );
};

export default CardComponent;