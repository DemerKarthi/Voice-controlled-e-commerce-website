import React from "react";
import './App.css';
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Testing from "../Testing/Testing";

const Home = () => {
  const { videosLoading, videos, popularVideos } = useSelector(
    (state) => ({
      videosLoading: state.videos.videosLoading,
      videos: state.videos.videos,
      popularVideos: state.videos.popularVideos,
    }),
    shallowEqual
  );

  return (
    <div className="App">
      <header>
        <div className="container">
          
        </div>
      </header>
      <main>
        <div className="container">
          <section className="products">
            <div className="product">
             <img src="/assets/img/product1.jpg"/>
              <h2>Product 1</h2>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>$25.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>$25.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>$25.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>$25.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>$25.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>$20.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product">
              <img src="/assets/img/product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>$25.00</p>
              <button>Add to Cart</button>
            </div>
            {/* Add more products here */}
          </section>
        </div>
      </main>
      <footer>
        <div className="container">
          <p> Developed by Dhanakarthikeyan. &copy; 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
;

export default Home;
