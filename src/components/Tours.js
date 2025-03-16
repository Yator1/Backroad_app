import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, name, date, info, location, days, price } =
            tour;

          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} alt={name} className="tour-img" />
                <p className='tour-date'>{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{days} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
