import React, { useState } from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginAction } from "../actions/userAction";
import { useDispatch } from "react-redux";

const API_URL = "http://localhost:2500";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // untuk menjalakan action redux
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputType, setInputType] = useState("password");

  const onBtnLogin = () => {
    // alert(`${inputEmail} ${inputPass}`);
    axios
      .get(API_URL + `/user?email=${inputEmail}&password=${inputPass}`)
      .then((response) => {
        delete response.data[0].password;
        localStorage.setItem("eshop_login", JSON.stringify(response.data[0]));
        dispatch(loginAction(response.data[0]));
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const onBtnVisible = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <div id="loginpage">
      <div className="container py-3 py-md-5">
        <div
          id="form-login"
          className="card bg-white my-5 w-50 p-5 m-auto shadow"
        >
          <Text fontSize="4xl" className="fw-bold">
            Sign in for shopping
          </Text>
          <div className="d-flex">
            <h6 className="muted-color">Don't have account?</h6>
            <h6 className="ms-2 main-color">Sign Up</h6>
          </div>
          <div className="mt-5 mb-3">
            <label className="form-label fw-bold text-muted">Email</label>
            <input
              type="email"
              className="form-control p-3"
              onChange={(element) => setInputEmail(element.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-muted">Password</label>
            <div className="input-group border rounded">
              <input
                type={inputType}
                className="form-control p-3 border-0"
                onChange={(element) => setInputPass(element.target.value)}
              />
              <span
                onClick={onBtnVisible}
                className="input-group-text bg-transparent border-0"
              >
                <AiOutlineEye />
              </span>
            </div>
          </div>
          <p className="text-muted my-3" style={{ textAlign: "right" }}>
            Forgot password? <span className="main-color">Click here</span>
          </p>
          <Button
            type="button"
            colorScheme="teal"
            variant="solid"
            onClick={onBtnLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="container d-flex justify-content-center">
    //     <div className="w-50 shadow py-5 my-5">
    //       <div>
    //         <div className="w-75 mx-auto">
    //           <Text fontSize="3xl" fontWeight="bold">
    //             Sign in for shopping
    //           </Text>
    //           <Text as="span">Don't have an account? </Text>
    //           <Text as="span">Sign up</Text>
    //         </div>

    //         <form className="mt-5 w-75 mx-auto">
    //           <div class="form-group">
    //             <label className="form-label fw-bold text-muted">Email</label>
    //             <input
    //               type="email"
    //               class="form-control"
    //               onChange={(e) => setInputEmail(e.target.value)}
    //             />
    //           </div>

    //           <div class="form-label" className="my-2">
    //             <label className="form-label fw-bold text-muted">
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               class="form-control"
    //               onChange={(e) => setInputPass(e.target.value)}
    //             />
    //             <span className="input-group-text bg-transparent border-0">
    //               <AiOutlineEye />
    //             </span>
    //           </div>

    //           <div>
    //             <Box mt="5" textAlign="right">
    //               <Text as="span">Forgot password? </Text>
    //               <Text as="span"> Click here</Text>
    //             </Box>
    //           </div>

    //           <ButtonGroup mt="3" w="100%">
    //             <Button onClick={onBtnLogin} w="100%" colorScheme="teal">
    //               Login
    //             </Button>
    //           </ButtonGroup>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
