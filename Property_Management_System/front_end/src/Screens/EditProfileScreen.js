import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../Actions/UserActions";
import img3 from "../Images/img3.jpg";

const EditProfile = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  console.log("This is for testing");
  console.log(response);

  // const editProfile = useSelector((store) => store.editProfile);
  // const { loading, error, response } = editProfile;

  const dispatch = useDispatch();

  const onEditProfile = () => {
    setId(userSignin.response.id);
    userSignin.response.email = email;
    userSignin.response.contactNo = contactNo;
    userSignin.response.address = address;
    dispatch(
      edit(
        id,
        userSignin.response.email,
        userSignin.response.contactNo,
        userSignin.response.address,
        photo
      )
    );
  };

  useEffect(() => {
    if (response && response.status == "OK") {
      props.history.push("/login");
    } else if (response && response.status == "error") {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div
      class="container col-sm-10 text-center mt-5"
      style={{
        backgroundImage: `url(${img3})`,
      }}
    >
      <Header title="Edit Profile.." />

      <div className="container col-sm-4 mt-5 border border-dark border-5">
        <form className="row g-3 needs-validation bg-light" novalidate>
          <div className="col-md-12 mt-3">
            <label for="validationCustomUsername" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <label for="validationCustomUsername" className="form-label">
              Contact Number
            </label>
            <div className="input-group has-validation">
              <input
                onChange={(e) => {
                  setContactNo(e.target.value);
                }}
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a Password.</div>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <label for="validationCustomUsername" className="form-label">
              Address
            </label>
            <div className="input-group has-validation">
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a Password.</div>
            </div>
          </div>
          <div class="input-group mb-3 mt-5 mr-3 ml-3">
            <input
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
              type="file"
              class="form-control"
              id="inputGroupFile02"
            />
            <label class="input-group-text" for="inputGroupFile02">
              Upload Photo
            </label>
          </div>

          <div className="col-12">
            <Link
              onClick={onEditProfile}
              type="button"
              className="btn btn-danger float-center mt-3 my-3"
              to="/login"
            >
              Save
            </Link>
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

EditProfile.defaultProps = {
  title: "",
};

export default EditProfile;
