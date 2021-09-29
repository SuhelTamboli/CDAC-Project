import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  PROPERTY_FETCH_REQUEST,
  PROPERTY_FETCH_SUCCESS,
  PROPERTY_FETCH_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAIL,
  OWNER_FETCH_REQUEST,
  OWNER_FETCH_SUCCESS,
  OWNER_FETCH_FAIL,
} from "../Constants/UserConstants";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

export const edit = (id, email, contactNo, address, photo) => {
  /*
  const userSignin = useSelector((store) => store.userSignin);
  const { response } = userSignin;

  const id = response.id;
  */
  return (dispatch) => {
    dispatch({
      type: USER_EDIT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      id,
      email,
      contactNo,
      address,
      photo,
    };
    const url = "http://localhost:7070/users/update";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_EDIT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_EDIT_FAIL,
          payload: error,
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/login";
    sessionStorage.setItem("userId", "");
  };
};

export const getProperty = () => {
  return (dispatch) => {
    dispatch({
      type: PROPERTY_FETCH_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {};
    const url = "http://localhost:7070/users/property";
    axios
      .get(url, body, header)
      .then((response) => {
        dispatch({
          type: PROPERTY_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: PROPERTY_FETCH_FAIL,
          payload: error,
        });
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch({
      type: USER_FETCH_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {};
    const url = "http://localhost:7070/admin/users";
    axios
      .get(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_FETCH_FAIL,
          payload: error,
        });
      });
  };
};

export const signup = (
  name,
  email,
  password,
  contactNo,
  address,
  role,
  adharCard
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      name,
      email,
      password,
      contactNo,
      address,
      role,
      adharCard,
    };
    const url = "http://localhost:7070/users/register";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      password,
    };
    const url = "http://localhost:7070/users/login";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

export const getOwner = (id) => {
  return (dispatch) => {
    dispatch({
      type: OWNER_FETCH_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = { id };
    const url = "http://localhost:7070/seeker/contactowner";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: OWNER_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: OWNER_FETCH_FAIL,
          payload: error,
        });
      });
  };
};
