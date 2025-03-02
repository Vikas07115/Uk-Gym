import React from 'react';
import { FaCheck } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/price.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/price.jpg",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/price.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className='pricing'>
      <h1>FLEX FUSION GYM</h1>
      <div className="wrapper">
        {
          pricing.map((element) => (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>{element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <FaCheck /> Equipment
                </p>
                <p>
                  <FaCheck /> All Day Pre Training
                </p>
                <p>
                  <FaCheck /> 24/7 Skilled Support
                </p>
                <p>
                  <FaCheck /> 20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Pricing;
