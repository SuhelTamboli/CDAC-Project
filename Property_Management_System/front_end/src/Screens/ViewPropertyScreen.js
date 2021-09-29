import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { getProperty } from "../Actions/UserActions";

const VIewPropertyScreen = (props) => {
  const dispatch = useDispatch();
  const fetchProperty = useSelector((store) => store.fetchProperty);
  const { error, response, loading } = fetchProperty;

  // const onUse = () => {
  //   dispatch(getProperty());
  // };

  useEffect(() => {
    dispatch(getProperty());
  }, []);

  const deleteProperty=(id)=>{
    axios.delete(`http://localhost:7070/admin/delete/${id}`).then(
      (response)=>{
        alert("property deleted succesfully");
      },
      (error)=>{
        alert("property deletion unsuccesfull");
      }
    )

  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="font-weight-bold">
            <td>Id</td>

            <td>Address</td>
            <td>Property Add Date</td>
            <td>Property Type</td>
            <td>Rent</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((fetchProperty) => {
              return (
                <tr>
                  <td>{fetchProperty.id}</td>

                  <td>{fetchProperty.address}</td>
                  <td>{fetchProperty.date}</td>
                  <td>{fetchProperty.propertyType}</td>
                  <td>{fetchProperty.rent}</td>
                  <td>{fetchProperty.status}</td>
                  <Link
                  onClick={()=>{
                    deleteProperty(fetchProperty.id);
                  }}
            type="button"
            className="btn btn-outline-primary float-right"
            to="/viewproperty"
          >
           Delete
          </Link>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default VIewPropertyScreen;
