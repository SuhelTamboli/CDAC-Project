import {
  PROPERTY_ADD_REQUEST,
  PROPERTY_ADD_SUCCESS,
  PROPERTY_ADD_FAIL,
  FACILITY_ADD_REQUEST,
  FACILITY_ADD_SUCCESS,
  FACILITY_ADD_FAIL,
} from "../Constants/OwnerConstants";

export const addPropertyReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_ADD_REQUEST:
      return { loading: true };
    case PROPERTY_ADD_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        //isSignupSuccess: action.payload.role,
      };
    case PROPERTY_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addFacilityReducer = (state = {}, action) => {
  switch (action.type) {
    case FACILITY_ADD_REQUEST:
      return { loading: true };
    case FACILITY_ADD_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        //isSignupSuccess: action.payload.role,
      };
    case FACILITY_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
