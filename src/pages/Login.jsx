import React from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";

const Login = (props) => {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="w-50 shadow py-5 my-5">
          <div>
            <div className="w-75 mx-auto">
              <Text fontSize="3xl" fontWeight="bold">
                Sign in for shopping
              </Text>
              <Text as="span">Don't have an account? </Text>
              <Text as="span">Sign up</Text>
            </div>

            <form className="mt-5 w-75 mx-auto">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" />
              </div>

              <div class="form-group" className="my-2">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" />
              </div>

              <div>
                <Box mt="5" textAlign="right">
                  <Text as="span">Forgot password? </Text>
                  <Text as="span"> Click here</Text>
                </Box>
              </div>

              <ButtonGroup mt="3" w="100%">
                <Button w="100%" colorScheme="teal">
                  Login
                </Button>
              </ButtonGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
