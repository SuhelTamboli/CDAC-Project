import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwner } from "../Actions/UserActions";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const CardComponent = (props) => {
  const dispatch = useDispatch();
  const getContact = useSelector((store) => store.getContact);
  //const { loading, error, response } = getContact;

  const fetchProperty = useSelector((store) => store.fetchProperty);
  const { error, response, loading } = fetchProperty;
  const id = response && response.id;

  const getOwnerContact = () => {
    dispatch(getOwner(id));
  };
  /*
  useEffect(() => {
    props.history.push("/getcontact");
  }, []);
*/
  return (
    <div className="container col-sm-12  mt-5">
      <Card className="container float-left col-sm-3 my-4 ml-5 mr-4">
        <CardImg top width="100%" src={props.imgsrc} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">City : {props.title}</CardTitle>

          <CardText>Address : {props.text}</CardText>
          <CardText>status : {props.status}</CardText>
          <CardText> Type : {props.propertyType}</CardText>
          <CardText>Rent : {props.rent}</CardText>

          <Link
            to="/getcontact"
            onClick={getOwnerContact}
            className="btn btn-primary"
          >
            Get Owner Contact
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
