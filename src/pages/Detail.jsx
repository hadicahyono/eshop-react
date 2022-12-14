import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductsAction } from "../actions/productAction";
import { API_URL } from "../helper";
import { Image, Text } from "@chakra-ui/react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Detail = () => {
  const [detail, setDetail] = useState(null);
  const [qty, setQty] = useState(1);

  const { search } = useLocation();
  console.log("useLocation -->", useLocation());
  const getDetail = () => {
    axios
      .get(API_URL + `/products${search}`)
      .then((res) => {
        console.log(res.data);
        setDetail(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  const onInc = () => {
    if (qty < detail?.stock) {
      setQty(qty + 1);
    }
  };

  const onDec = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="container main-page p-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <Image
            className="shadow-sm"
            boxSize="100%"
            margin="auto"
            objectFit="cover"
            src={detail?.images}
            fallbackSrc="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="
          />
          <Text
            opacity={0.6}
            fontSize={["3xl", "6xl"]}
            className="muted-color position-relative"
            top={"-10%"}
          >
            {detail?.category.toUpperCase()}
          </Text>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex">
            <div>
              <Text fontSize={["4xl", "6xl"]} className="main-color fw-bold">
                {detail?.name}
              </Text>
              <div className="d-flex">
                <Text fontSize="4xl" className="main-color me-3">
                  by
                </Text>
                <Text fontSize="4xl" className="text-muted fw-bold">
                  {detail?.brand}
                </Text>
              </div>
            </div>
          </div>
          <div className="my-3">
            <label className="muted-color">Description</label>
            <p style={{ textAlign: "justify" }}>{detail?.description}</p>
          </div>
          <Text fontSize={["4xl", "6xl"]} className="text-muted fw-bold">
            Rp. {detail?.price.toLocaleString()}
          </Text>
          <div className="d-flex my-4">
            <div className="btn-group">
              <button className="btn" type="button" onClick={onDec}>
                <AiFillMinusCircle className="main-color" size={28} />
              </button>
              <Text fontSize="3xl" className="text-muted fw-bold">
                {qty}
              </Text>
              <button className="btn" type="button" onClick={onInc}>
                <AiFillPlusCircle className="main-color" size={28} />
              </button>
            </div>
            <button className="btn btn-outline-primary w-100" type="button">
              Buy
            </button>
          </div>
        </div>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default Detail;
