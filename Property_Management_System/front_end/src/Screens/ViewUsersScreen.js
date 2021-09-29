import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../Actions/UserActions";

const VIewUserScreen = (props) => {
 const dispatch = useDispatch();
  const fetchUser = useSelector((store) => store.fetchUser);
  const { error, response, loading } = fetchUser;

  // const onUse = () => {
  //   dispatch(getUser());
  // };
  
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="font-weight-bold">
            <td>Id</td>
            <td>Name </td>
            <td>Address</td>
            <td>Adhar Card</td>
            <td>Phone Number</td>
            <td>Role</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((fetchUser) => {
              return (
                <tr>
                  <td>{fetchUser.id}</td>
                  <td>{fetchUser.name}</td>
                  <td>{fetchUser.address}</td>
                  <td>{fetchUser.adharCard}</td>
                  <td>{fetchUser.contactNo}</td>
                  <td>{fetchUser.role}</td>
                  <td>{fetchUser.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default VIewUserScreen;
