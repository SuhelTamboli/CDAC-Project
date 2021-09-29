import Header from "../Components/Header";
import { Link } from "react-router-dom";

const forgotpassScreen = (props) => {
  // const [email, setEmail] = useState("");

  const sendEmail = () => {
    alert("Email Sent Successfully !!!");
  };

  return (
    <div className="text-center mt-5">
      <Header title="Enter Email To Get Password.." />
      <div className="container col-sm-4 mt-5 border border-dark border-5">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              /* onChange={(e) => {
                setEmail(e.target.value);
              }} */
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <Link to="/login">
            {" "}
            <button
              onClick={sendEmail}
              type="submit"
              className="btn btn-primary float-left"
            >
              Send Password
            </button>
          </Link>

          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default forgotpassScreen;
