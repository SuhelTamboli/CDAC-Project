import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_FETCH_RESET,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  PROPERTY_FETCH_RESET,
  PROPERTY_FETCH_REQUEST,
  PROPERTY_FETCH_SUCCESS,
  PROPERTY_FETCH_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAIL,
  OWNER_FETCH_REQUEST,
  OWNER_FETCH_SUCCESS,
  OWNER_FETCH_FAIL,
  OWNER_FETCH_RESET,
} from "../Constants/UserConstants";

export const userEditReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { loading: true };
    case USER_EDIT_SUCCESS:
      return {
        loading: false,
        response: action.payload.result,
        //isSignupSuccess: action.payload.role,
      };
    case USER_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        //isSignupSuccess: action.payload.role,
      };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        response: action.payload.result,
        /*loading: false,
        response: action.payload,
        id: action.payload.id,
        name: action.payload.user_name,
        email: action.payload.user_email,
        password: action.payload.password,
        address: action.payload.address,

        islogin: true,*/
      };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload.result };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const fetchUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { loading: true };
    case USER_FETCH_SUCCESS:
      return { loading: false, response: action.payload.result };
    case USER_FETCH_FAIL:
      return { loading: false, error: action.payload.result };
    case USER_FETCH_RESET:
      return {};
    default:
      return state;
  }
};

export const fetchPropertyReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_FETCH_REQUEST:
      return { loading: true };
    case PROPERTY_FETCH_SUCCESS:
      return { loading: false, response: action.payload.result };
    case PROPERTY_FETCH_FAIL:
      return { loading: false, error: action.payload.result };
    case PROPERTY_FETCH_RESET:
      return {};
    default:
      return state;
  }
};

export const fetchOwnerReducer = (state = {}, action) => {
  switch (action.type) {
    case OWNER_FETCH_REQUEST:
      return { loading: true };
    case OWNER_FETCH_SUCCESS:
      return { loading: false, response: action.payload.result };
    case OWNER_FETCH_FAIL:
      return { loading: false, error: action.payload.result };
    case OWNER_FETCH_RESET:
      return {};
    default:
      return state;
  }
};
