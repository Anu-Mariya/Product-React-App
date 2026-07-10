import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const ViewProducts = () => {

  const [data, changeData] = useState(
    [
      { "ProductName": "DoveBar", "avatar": "https://tse3.mm.bing.net/th/id/OIP.TYQPyjlrVjGQ2DUCXNbTLQHaHa?r=0&pid=Api&P=0&h=180", "category": "MCA" ,"produCode": "123" ,"price":50},
      { "ProductName": "Lipstick", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUigKWEy4PtSbgsY5UeuWbPcfmtnFgCzs0a8jnqCUmw&s=10", "category": "MBA" ,"produCode": "132" ,"price":600},
      { "ProductName": "Kitchen Utensils", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlV6igYuyOwf2pJ4jyqfVNnMqq5ba7bFNOnrRp54JdQ&s=10", "category": "MSC" ,"produCode": "231" ,"price":150},
      { "ProductName": "BodyWash", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrXv63GkTaFmq6zYQn7iz2lzzYm03Vq0rylwpolxcGQ&s=10", "category": "MCA" ,"produCode": "423" ,"price":450},
      { "ProductName": "Frock", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10Y-TmrTrtI4mPnVG4Eqqt8r466cv47vcQG3JeqF9OA&s=10", "category": "MBA" ,"produCode": "112" ,"price":500}
    ]
  )
  return (
    <div>
      <NavigationBar />

      <div className="container mt-4">
        <div className="row g-4">

          {data.map(
             (value,index) =>
               { return(
               
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={value.avatar}
                className="card-img-top"
                alt="Dove Bar"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  {value.ProductName}
                </h5>
                <p className="card-text fw-bold">
                  {value.price}
                </p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>

               )

            }
          )}

        </div>
      </div>
    </div>
  );
};

export default ViewProducts;