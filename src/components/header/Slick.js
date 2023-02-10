import React from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import "../header/slider.css";

const LazyLoad = () => {

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active btn-slide"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          className="btn-slide"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          className="btn-slide"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-white" style={{fontSize:"24px", fontWeight: "900", textShadow: "2px 2px 4px #000000"}}>
              Вы хотите прожить более долгую и здоровую жизнь. Вы пришли в нужное место.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-white" style={{fontSize:"24px", fontWeight: "900", textShadow: "2px 2px 4px #000000"}}>
              Мы строго подходим к каждому ингредиенту: он должен быть чистым
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-white" style={{fontSize:"24px", fontWeight: "900", textShadow: "2px 2px 4px #000000"}}>
              Мы поддерживаем связь между людьми и растениями, чтобы дать Природе жизненную силу.
            </p>
          </div>
        </div>
      </div>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default LazyLoad;