import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Actions/UserActions";
import img2 from "../Images/img2.jpg";

const RegistrationScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [adharCard, setAdharCard] = useState("");

  const dispatch = useDispatch();

  const userSignup = useSelector((store) => store.userSignup);

  const { loading, response, error } = userSignup;

  const onSignup = () => {
    dispatch(
      signup(name, email, password, contactNo, address, role, adharCard)
    );
  };

  const Alert = () => {
    alert("Thank You For Registration !!!!");
  };

  useEffect(() => {
    if (response && response.status == "success") {
      props.history.push("/login");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const Role = (e) => {
    setRole(e.target.value);
  };

  return (
    <div
      class="text-center mt-5"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <Header title="Register With Valid Credentials.." />

      <div class="container col-sm-4 my-5 border border-dark border-5 ">
        <form class="row g-3 needs-validation " novalidate>
          <div class="col-md-4 mt-3">
            <label for="validationCustom04" class="form-label">
              Role
            </label>
            <select
              onChange={Role}
              class="form-select"
              id="validationCustom04"
              required
            >
              <option>Choose..</option>
              <option>OWNER</option>
              <option>SEEKER</option>
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <br></br>
          <br></br>
          <div class="col-md-6">
            <label for="validationCustomUsername" class="form-label">
              Name
            </label>
            <div class="input-group has-validation">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose First Name.</div>
            </div>
          </div>{" "}
          <div class="col-md-12 mt-3">
            <label for="validationCustomUsername" class="form-label">
              Email
            </label>
            <div class="input-group has-validation">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose Email.</div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <label for="validationCustomUsername" class="form-label">
              Password
            </label>
            <div class="input-group has-validation">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a Password.</div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustomUsername" class="form-label">
              ContactNo
            </label>
            <div class="input-group has-validation">
              <input
                onChange={(e) => {
                  setContactNo(e.target.value);
                }}
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please Enter Phone Number.</div>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustom05" class="form-label">
              Address
            </label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />

            <div class="invalid-feedback">Please provide Address.</div>
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustom05" class="form-label">
              Adharcard
            </label>
            <input
              onChange={(e) => {
                setAdharCard(e.target.value);
              }}
              type="text"
              class="form-control"
              id="validationCustom05"
              required
            />

            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div class="col-12">
            <div class="form-check my-3 float-left">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="col-12">
            <Link to="/login">
              <button
                class="btn btn-primary float-left"
                type="submit"
                onClick={(Alert, onSignup)}
              >
                Register
              </button>
            </Link>
            <p class="col-sm-auto float-left ml-5">Already a User?</p>
            <Link
              type="button"
              class="btn btn-primary float-right mb-5"
              to="/login"
            >
              Login Here
            </Link>
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default RegistrationScreen;
