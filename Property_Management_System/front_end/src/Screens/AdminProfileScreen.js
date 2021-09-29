import Header from "../Components/Header";
import { Link } from "react-router-dom";
import img2 from "../Images/img2.jpg";

import { useDispatch, useSelector } from "react-redux";

import Profile from "../Components/Profile";

const AdminProfileScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;
  console.log("Testing Profile component");
  console.log(response);

  return (
    <div
      class="container col-sm-10 text-center mt-5"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <Header title="This is Admin Profile" />
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
        <Link type="button" class="btn btn-danger m-3" to="/editprofile">
          Edit Profile
        </Link>

        <Link type="button" class="btn btn-danger m-3" to="/viewusers">
          View User Report
        </Link>

        <Link type="button" class="btn btn-danger m-3" to="/viewproperty">
          View Property Report
        </Link>

        <h4 className="title">{props.title}</h4>
      </div>
    </div>
  );
};

AdminProfileScreen.defaultProps = {
  title: "",
};

export default AdminProfileScreen;
