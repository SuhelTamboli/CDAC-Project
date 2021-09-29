import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Checkbox from "../Components/Checkbox";

const PaymentScreen = (props) => {
  return (
    <div>
      <div class="text-center mt-5">
        <Header title="Make Payment With Valid Credentials.." />

        <div class="container col-sm-4 mt-5 border border-dark border-5">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Account Holder Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="input-group mt-3 mr-3 ml-5">
              <Checkbox title="Credit Card" />
              <Checkbox title="Debit Card" />
            </div>

            <div class="col-md-12 mt-3">
              <label for="exampleInputEmail1" class="form-label">
                Account Number
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="col-md-4 mt-3">
              <label for="validationCustomUsername" class="form-label">
                CVV
              </label>

              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose City.</div>
            </div>

            <div class="col-md-4 mt-3">
              <label for="validationCustom05" class="form-label">
                Amount
              </label>

              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                required
              />

              <div class="invalid-feedback">Please provide a valid Amount.</div>
            </div>
            <Link type="button" class="btn btn-outline-primary mb-3" to="/">
              Make Payment
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

PaymentScreen.defaultProps = {
  title: "",
};

export default PaymentScreen;
