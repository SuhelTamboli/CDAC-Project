import { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img4 from "../Images/img4.jpg";

import { addProperty } from "../Actions/OwnerActions";

const AddPropertyScreen = () => {
  const [propertyType, setpropertyType] = useState("NULL");
  const [ownerData, setOwnerData] = useState({ id: "" });
  const [pincode, setPincode] = useState("NULL");
  // const [areaData, setAreaData] = useState("");
  const [city, setCity] = useState("NULL");
  const [address, setAddress] = useState("NULL");
  const [photo, setPhoto] = useState("NULL");
  //const [furnished, setFurnished] = useState("NULL");
  //const [security, setSecurity] = useState("NULL");
  //const [lift, setLift] = useState("NULL");
  const [rent, setRent] = useState("NULL");

  /*const [facilityList, setFacilityList] = useState({
    seculity: "",
    lift: "",
    furnished: "",
  }); */
  /*onChange={(e) => {
                setFacilityList({ lift: e.target.value });
              }} 
              
              
               value={setFacilityList.security}
              onChange={(e) => {
                setFacilityList({ security: e.target.value });
              }}
              
              value={setFacilityList.furnished}
              onChange={(e) => {
                setFacilityList({ furnished: e.target.value });
              }}
              */
  const dispatch = useDispatch();

  const propertyAdd = useSelector((store) => store.propertyAdd);

  const { loading, response, error } = propertyAdd;

  const onAdd = () => {
    dispatch(
      addProperty(
        propertyType,
        ownerData,
        pincode,
        city,
        address,
        photo,
        // furnished,
        // security,
        //lift,
        rent
        // facilityList
      )
    );
  };

  useEffect(() => {
    if (response && response.status == "success") {
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  return (
    <div
      class="text-center mt-5"
      className=" container col-sm-10 text-center mt-5"
      style={{
        backgroundImage: `url(${img4})`,
      }}
    >
      <Header title="Add Property With Valid Details.." />

      <div class="container col-sm-4 mt-5 border border-dark border-5 bg-light-gradient ">
        <form class="row g-3 needs-validation font-weight-bold  " novalidate>
          <div class="col-md-6 mt-3">
            <label for="validationCustom05" class="form-label">
              Pincode
            </label>
            <input
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              propertyType="text"
              class="form-control"
              id="validationCustom05"
              required
            />
          </div>
          <div class="col-md-6 mt-3">
            <label for="validationCustom05" class="form-label">
              Owner Id
            </label>
            <input
              value={ownerData.id}
              onChange={(e) => {
                setOwnerData({ id: e.target.value });
              }}
              propertyType="text"
              class="form-control"
              id="validationCustom05"
              required
            />
          </div>
          <div class="col-md-12 mt-3">
            <label for="validationCustom05 " class="form-label float-left">
              Complete Address
            </label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              propertyType="text"
              class="form-control"
              id="validationCustom05"
              required
            />
          </div>
          <div class="col-md-4 mt-3">
            <label for="validationCustom04" class="form-label">
              Property Type
            </label>
            <select
              class="form-select"
              id="validationCustom04"
              required
              onChange={(e) => {
                setpropertyType(e.target.value);
              }}
            >
              <option>Choose..</option>
              <option>oneBHK</option>
              <option>twoBHK</option>
              <option>threeBHK</option>

              <option>...</option>
            </select>
          </div>
          <div class="col-md-6 mt-3">
            <label for="validationCustom05" class="form-label">
              City
            </label>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              propertyType="text"
              class="form-control"
              id="validationCustom05"
              required
            />
          </div>

          <div class="col-md-4 mt-4 float-center">
            <label for="validationCustom05 " class="form-label float-center">
              Rent
            </label>
            <input
              onChange={(e) => {
                setRent(e.target.value);
              }}
              propertyType="text"
              class="form-control"
              id="validationCustom05"
              required
            />
          </div>
          {/* <div class="input-group mb-3 mt-3 mr-3 ml-3">
            <input
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
              propertyType="file"
              class="form-control"
              id="inputGroupFile02"
            />
            <label class="input-group-text" for="inputGroupFile02">
              Upload Photo
            </label>
          </div> */}
          <br></br>
          <br></br>
          <div class="col-12">
            <Link to="/home">
              <button
                class="btn btn-danger float-left"
                propertyType="submit"
                onClick={onAdd}
              >
                Add 
              </button>
            </Link>

            <Link
              propertyType="button"
              class="btn btn-danger float-right"
              to="/ownerprofile"
            >
              Cancel
            </Link>
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyScreen;
