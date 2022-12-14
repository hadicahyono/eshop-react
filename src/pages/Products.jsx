import React, { useEffect, useState } from "react";
import { Text, Button, Image } from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/productAction";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataFilter, setDataFilter] = useState(null);
  const [filterName, setFilterName] = useState("");
  const { products } = useSelector((state) => {
    return {
      products: state.productReducer.products,
    };
  });

  const getFilter = async () => {
    try {
      let res = await axios.get(API_URL + `/products?name=${filterName}`);
      setDataFilter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onBtnReset = () => {
    setDataFilter(null);
    setFilterName("");
    dispatch(getProductsAction());
  };

  useEffect(() => {
    // getData();
    dispatch(getProductsAction());
  }, []);

  const printData = () => {
    let data = dataFilter == null ? products : dataFilter;
    return data.map((val, idx) => {
      return (
        <div
          className="col-12 col-sm-6 col-lg-4 "
          onClick={() => navigate(`/detail?id=${val.id}`)}
          key={val.id}
        >
          <div className="card border-0 shadow rounded-3 btn p-0">
            <Image
              src={val.images}
              boxSize="100%"
              objectFit="cover"
              alt={val.name}
            />
          </div>
          <div
            className="card shadow bg-primary m-auto text-center py-2 position-relative"
            style={{ width: "80%", top: "-45px" }}
          >
            <Text fontSize="xl" className="fw-bold text-white">
              Rp. {val.price.toLocaleString()}
            </Text>
            <Text fontSize="lg" className="text-white">
              {val.name}
            </Text>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container main-page">
      <div>
        <Text fontSize="4xl" className="fw-bold text-muted">
          Our Arrival products
        </Text>
        <p className="muted-color">
          Choose product and{" "}
          <span className="main-color fw-bold"> transact more easily.</span>
        </p>
      </div>
      <div className="row my-3">
        <div className="col-12 col-md-3">
          <div className="card shadow-sm rounded bg-primary shadow-lg">
            <div className="card-body">
              <Text fontSize="xl" className="fw-bold text-white mb-2">
                Filter
              </Text>
              <div className="row">
                <div className="col-12  my-2 ">
                  <input
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="col-12 my-2">
                  <select className="form-select">
                    <option selected>Select brand</option>
                    <option value="IKEA">IKEA</option>
                    <option value="ACE">ACE</option>
                    <option value="Mr. DIY">Mr. DIY</option>
                  </select>
                </div>
                <div className="col-12 my-2 ">
                  <select className="form-select">
                    <option selected>Select category</option>
                    <option value="Livingroom">Livingroom</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Kitchen">Kitchen</option>
                  </select>
                </div>
                <div className="col-12 my-2">
                  <div className="d-flex">
                    <input
                      className="form-control me-1"
                      type="number"
                      placeholder="Minimum"
                    />
                    <input
                      className="form-control ms-1"
                      type="number"
                      placeholder="Maximum"
                    />
                  </div>
                </div>
                <div className="col-12 my-2 d-flex justify-content-evenly">
                  <Button colorScheme="teal" type="button" onClick={getFilter}>
                    Filter
                  </Button>
                  <Button
                    colorScheme="yellow"
                    type="button"
                    onClick={onBtnReset}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="row justify-content-start">{printData()}</div>
        </div>
      </div>
    </div>
  );
};
export default Products;
