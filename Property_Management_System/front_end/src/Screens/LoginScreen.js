import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import img2 from "../Images/img2.jpg";

import { signin } from "../Actions/UserActions";

import { useDispatch, useSelector } from "react-redux";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;

  const dispatch = useDispatch();

  const OnSignin = () => {
    dispatch(signin(email, password));
  };
  /*
  useEffect(() => {
    let url;
    if (response && response.role == "ADMIN") {
      url = "/adminprofile";
    } else if (response && response.role == "OWNER") {
      url = "/ownerprofile";
    } else if (response && response.role == "SEEKER") {
      url = "/seekerprofile";
    }
  }, [loading, error, response]);*/

  /* useEffect(() => {
    if (response && response.status == "OK") {
      localStorage.setItem("user", response.role);
      //localStorage.setItem("user", JSON.stringify(response));
      if (response && response.role == "ADMIN") {
        props.history.push("/adminprofile");
      } else if (response && response.role === "OWNER") {
        props.history.push("/ownerprofile");
        //<Link to="/ownerprofile"></Link>;
      } else if (response && response.role == "SEEKER") {
        props.history.push("/seekerprofile");
      }
    } else if (response && response.status == "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]); */

  /* useEffect(() => {
    localStorage.setItem("user", userSignin);
    if (role === "ADMIN") {
      sessionStorage.setItem("token", id);
      props.history.push("/adminprofile");
    } else if (role === "OWNER") {
      sessionStorage.setItem("token", id);
      props.history.push("/ownerprofile");
    } else if (role === "SEEKER") {
      localStorage.setItem("token", id);
      props.history.push("/seekerprofile");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response, role, id]);
  */

  return (
    <div className=" container col-sm-10 text-center mt-5">
      <Header title="Login With Valid Credentials.." />
      <div className="container col-sm-6 bg-light mt-5 border border-dark border-5">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <Link
            to="/"
            onClick={OnSignin}
            type="submit"
            className="btn btn-primary float-left"
          >
            Login
          </Link>

          <Link
            type="button"
            className="btn btn-outline-primary float-left ml-4"
            to="/forgotpass"
          >
            Forgot Password
          </Link>

          <p className="col-sm-auto float-left ml-2 ">New User?</p>

          <Link
            type="button"
            className="btn btn-outline-primary float-right"
            to="/registration"
          >
            Register Here
          </Link>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
