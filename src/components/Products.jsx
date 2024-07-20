import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("\data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        console.log("Fetched products:", products); // Check fetched data
        setData(products);
        setFilter(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    // Cleanup function to avoid memory leaks
    return () => {
      setData([]);
      setFilter([]);
    };
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={300} />
        </div>
      ))}
    </>
  );

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("GamingPC")}>GamingPC</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("GamingAccessories")}>GamingAccesories</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("TablesAndChairs")}>TableandChairs</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("GamingRoom")}>GamingRoom</button>
      </div>

      {filter.length === 0 ? (
        <div className="col-12 text-center py-5">
          <p>No products found.</p>
        </div>
      ) : (
        filter.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt={product.title}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.length > 12 ? `${product.title.substring(0, 12)}...` : product.title}
                </h5>
                <p className="card-text">
                  {product.description.length > 90 ? `${product.description.substring(0, 90)}...` : product.description}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
