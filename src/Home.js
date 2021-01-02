import React from 'react';
import "./Home.css";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Product from  "./Product.js";
import  images  from  "./Slider-images";

function Home() {
    return (
        <div className="home">
            <div className = "slider-wrapper">
                <Slider autoplay={1297} >
                        
                        {images.map((item, index) => (
                            <div key={index} className = " slider-wrapper">
                                <section className = "home__image">
                                    <img src={item.image} alt="" />
                                </section>

                            </div>
                        ))}

                </Slider>
            </div>

            <div className="home__row">
                <Product 
                    id = "12314"
                    title = "Macbook Pro"
                    price = {175000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SX679_.jpg"
                />
                <Product 
                    id = "12315"
                    title = "OnePlus Nord"
                    price = {27000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71gag816F7L._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id = "12314"
                    title = "Rich Dad Poor Dad"
                    price = {390}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
                />
                <Product 
                    id = "12315"
                    title = "Think and Grow Rich"
                    price = {225}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41ZrHnzC6zL._SY393_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id = "12316"
                    title = "Amazon Echo"
                    price = {7500}
                    rating = {4}
                    image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id = "12317"
                    title = "Fit Bit"
                    price = {11999}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product 
                    id = "12318"
                    title = "OnePlus Q1 Series 4K"
                    price = {85000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SL1500_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id = "12319"
                    title = "Puma Unisex's Escaper Pro Core Running Shoes"
                    price = {2500}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/813zj-065jL._UL1500_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;