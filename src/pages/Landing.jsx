import { Text } from "@chakra-ui/react";
import React from "react";

const Landing = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1501501753674-3cc5ea1bc1ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
      </div>

      <div className="my-5 px-8 container container-fluid ">
        <div className="d-flex flex-row align-items-center">
          <div className="w-25 mx-auto shadow">
            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </div>

          <div className="w-50">
            <div className="w-50">
              <Text fontWeight="extrabold" fontSize="2xl">
                STANDING LAMP
              </Text>
              <Text color="grey" fontWeight="bold" fontSize="xl">
                IKEA | Living
              </Text>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                fuga laboriosam eaque maiores distinctio aliquid atque cumque
                nulla culpa. Perferendis fuga provident dolore repellendus
                mollitia iusto distinctio? Illum, pariatur eos.
              </Text>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div className="w-50">
            <div className="w-50">
              <Text fontWeight="extrabold" fontSize="2xl">
                PLATE
              </Text>
              <Text color="grey" fontWeight="bold" fontSize="xl">
                IKEA | Kitchen
              </Text>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                fuga laboriosam eaque maiores distinctio aliquid atque cumque
                nulla culpa. Perferendis fuga provident dolore repellendus
                mollitia iusto distinctio? Illum, pariatur eos.
              </Text>
            </div>
          </div>
          <div className="w-25 h-25 mx-auto shadow">
            <img
              src="https://images.unsplash.com/photo-1589008828487-ac5e8826e513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div className="w-25 h-25 mx-auto shadow">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </div>
          <div className="align-items-center w-50">
            <div className="w-50">
              <Text fontWeight="extrabold" fontSize="2xl">
                KURSI
              </Text>
              <Text color="grey" fontWeight="bold" fontSize="xl">
                IKEA | Living
              </Text>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                fuga laboriosam eaque maiores distinctio aliquid atque cumque
                nulla culpa. Perferendis fuga provident dolore repellendus
                mollitia iusto distinctio? Illum, pariatur eos.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
