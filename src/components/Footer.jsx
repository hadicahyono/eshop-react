import React from "react";
import { Text } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div className="bg-light">
      <div className="container container-fluid pt-3">
        <div className="d-flex flex-row justify-content-around">
          <div className="">
            <Text as="span" fontWeight="bold" color="teal">
              E-Shop
            </Text>
            <Text as="span"> | Furniture</Text>
          </div>
          <div className="d-none d-sm-block">
            <Text fontWeight="bold">Products</Text>
            <p>Livingroom</p>
            <p>Bedroom</p>
            <p>Kitchen</p>
          </div>
          <div className="d-none d-sm-block">
            <Text fontWeight="bold">Company</Text>
            <p>About Us</p>
            <p>Career</p>
          </div>
          <div className="d-none d-sm-block">
            <Text fontWeight="bold">Follow Us</Text>
            <div className="d-flex flex-row">
              <FaFacebookSquare size={28} color="teal" className="my-1 mr-1" />
              <FaInstagram size={28} color="teal" className="my-1 mx-1" />
              <FaTwitterSquare size={28} color="teal" className="my-1 ml-1" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center pt-5 pb-3">
          <Text color="GrayText">
            © 2022 E-ShopEngineer. All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
