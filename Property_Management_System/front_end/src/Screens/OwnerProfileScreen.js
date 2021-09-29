import Header from "../Components/Header";
import { Link } from "react-router-dom";
import img2 from "../Images/img2.jpg";

import { useDispatch, useSelector } from "react-redux";

import Profile from "../Components/Profile";

const OwnerProfileScreen = (props) => {
  // const userSignin = useSelector((store) => store.userSignin);
  // const { response } = userSignin;
  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;

  return (
    <div
      class="container col-sm-10 text-center mt-5"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <Header title="This is Owner Profile" />
      <div>
        <Profile
          imgsrc="https://source.unsplash.com/user/erondu/1600x900"
          name={response.name}
          email={response.email}
          phone={response.contactNo}
          address={response.address}
        />
      </div>
      <div className=" container col-sm-3">
        <h4 className="title">{props.title}</h4>
        <Link type="button" class="btn btn-danger m-3" to="/editprofile">
          Edit Profile
        </Link>
        <Link type="button" class="btn btn-danger m-3" to="/addproperty">
          Add Property
        </Link>
      </div>
    </div>
  );
};

export default OwnerProfileScreen;
