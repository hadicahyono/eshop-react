import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Button, Text } from "@chakra-ui/react";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("password");

  const API_URL = "http://localhost:2500";

  const onRegis = () => {
    axios
      .post(API_URL + `/user`, {
        username,
        email,
        password,
        role: "user",
      })
      .then((response) => alert(`Register success`))
      .catch((err) => console.log(err));
  };

  const onVisibility = () => {
    if (visible === "password") {
      setVisible("text");
    } else if (visible === "text") {
      setVisible("password");
    }
  };

  return (
    <div id="regispage">
      <div className="container py-5">
        <div className="row bg-white my-5 shadow rounded">
          <div className="col-12 col-md-8 d-none d-md-block">
            <img
              //   src={require("../Assets/forms.png")}
              width="100%"
              alt="content"
            />
          </div>
          <div className="col-12 col-md-4 p-5 shadow">
            <h6 className="fw-bold muted-color">START FOR FREE</h6>
            <Text className="fw-bold" fontSize="4xl">
              {" "}
              Sign up to E-SHOP
            </Text>
            <div className="d-flex">
              <h6 className="muted-color">Already a member ?</h6>
              <h6 className="ms-2 main-color fw-bold">Sign In</h6>
            </div>
            <div id="form">
              <div className="my-3">
                <label className="form-label fw-bold text-muted">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="example01"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label className="form-label fw-bold text-muted">E-Mail</label>
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3 ">
                <label className="form-label fw-bold text-muted">
                  Password
                </label>
                <div className="input-group border rounded">
                  <input
                    type={visible}
                    className="form-control p-3 border-0"
                    placeholder="6+ character"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={onVisibility}
                    className="input-group-text bg-transparent border-0"
                    id="basic-addon2"
                  >
                    {visible === "password" ? (
                      <AiOutlineEye size={26} />
                    ) : (
                      <AiOutlineEyeInvisible size={26} />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <Button
              type="button"
              width="full"
              colorScheme="teal"
              variant="solid"
              onClick={onRegis}
            >
              Create an account
            </Button>
            <div className="text-center text-muted">
              <span>or</span>
            </div>
            <button
              onClick={() =>
                window.open(`https://google.com`, "_blank").focus()
              }
              className="btn btn-light py-2 text-muted mt-2 w-100 shadow"
            >
              <div className="d-flex justify-content-center align-items-center">
                <FcGoogle size={36} className="me-2" />{" "}
                <span> Sign up with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import {
//   Button,
//   Text,
//   Input,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// import React, { useState } from "react";

// const Register = () => {
//   const [show, setShow] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");

//   const visibleHandler = () => setShow(!show);

//   const onRegis = () => {
//     alert(`${username} ${email} ${pass}`);
//   };
//   return (

//     // <div>
//     //   <div className="container w-100 ">
//     //     <div className="d-flex flex-row justify-content-between">
//     //       <div className="w-75 ">image</div>
//     //       <div id="container-register" className="shadow w-50 px-5 py-3">
//     //         <div>
//     //           <Text fontSize="xl" fontWeight="bold">
//     //             Start for free
//     //           </Text>
//     //           <Text fontSize="4xl" fontWeight="extrabold">
//     //             Sign up to E-Shop
//     //           </Text>
//     //           <Text mb="5">
//     //             Already a member? <Text as="span">Sign in</Text>
//     //           </Text>
//     //           <div>
//     //             <label>Username</label>
//     //             <input
//     //               type="text"
//     //               placeholder="example01"
//     //               className="form-control"
//     //               onChange={(e) => setUsername(e.target.value)}
//     //             />
//     //           </div>
//     //           <div>
//     //             <label>E-mail</label>
//     //             <input
//     //               type="email"
//     //               placeholder="name@example.com"
//     //               className="form-control"
//     //               onChange={(e) => setEmail(e.target.value)}
//     //             />
//     //           </div>
//     //           <div>
//     //             <label>Password</label>
//     //             <InputGroup size="md">
//     //               <Input
//     //                 pr="4.5rem"
//     //                 type={show ? "text" : "password"}
//     //                 placeholder="Enter password"
//     //                 onChange={(e) => setPass(e.target.value)}
//     //               />
//     //               <InputRightElement width="4.5rem">
//     //                 <Button h="1.75rem" size="sm" onClick={visibleHandler}>
//     //                   {show ? "Hide" : "Show"}
//     //                 </Button>
//     //               </InputRightElement>
//     //             </InputGroup>
//     //           </div>
//     //           <Button w="100%" colorScheme="teal">
//     //             Create an account
//     //           </Button>
//     //           <Text textAlign="center">or</Text>
//     //           <Button w="100%">Sign up with Google</Button>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Register;
