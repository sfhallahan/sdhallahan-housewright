import React from 'react';
import carouselImgOne from '../img/home-fenwick.jpg';
import carouselImgTwo from '../img/sunset-home.jpg';
import carouselImgThree from '../img/home-living-room.jpg';
import homeIcon from '../img/home.svg';
import buildingIcon from '../img/building.svg';
import clipboardIcon from '../img/clipboard.svg';
import truckIcon from '../img/truck.svg';
import thumbnail from '../img/garage-thumbnail.jpg';

export default () => (
  <main>
    <section className="carousel">
      <div className="carousel__container">
        <img className="carousel__img" src={carouselImgOne} />
      </div>
      <div className="carousel__container carousel__container--active">
        <img className="carousel__img" src={carouselImgTwo} />
      </div>
      <div className="carousel__container">
        <img className="carousel__img" src={carouselImgThree} />
      </div>
    </section>
    <section className="section section__services">
      <div className="service">
        <div className="service__titlecontainer">
          <img className="service__icon" src={homeIcon} />
          <h3 className="service-title">RESIDENTIAL CONSTRUCTION</h3>
        </div>
        <p className="service-text">
          Custom Home Building, Apartment/Condo/Co-op Renovations, Design/Build, Remodeling,
          Additions, Kitchen & Bathrooms.
        </p>
      </div>
      <div className="service">
        <div className="service__titlecontainer">
          <img className="service__icon" src={buildingIcon} />
          <h3 className="service-title">COMMERCIAL CONSTRUCTION</h3>
        </div>
        <p className="service-text">
          Interior/Exterior Renovations, National Franchises, Retail Stores, Office Build Outs, New
          Construction and Industrial Buildings.
        </p>
      </div>
      <div className="service">
        <div className="service__titlecontainer">
          <img className="service__icon" src={clipboardIcon} />
          <h3 className="service-title">CONSTRUCTION MANAGEMENT</h3>
        </div>
        <p className="service-text">
          A principle member of our company is involved in the construction management process from
          inception to completion.
        </p>
      </div>
      <div className="service">
        <div className="service__titlecontainer">
          <img className="service__icon" src={truckIcon} />
          <h3 className="service-title">FIRE/FLOOD RESTORATION</h3>
        </div>
        <p className="service-text">
          Demolition, Cleanup, Fire and Mold Remediation, Residential / Commercial / Retail.
        </p>
      </div>
    </section>
    <div className="section homepage-other-container">
      <div className="section__who-we-are">
        <h2 className="section__header--large">
          S.D. Hallahan Housewright is a General Contractor in the Southeast Connecticut Shoreline
        </h2>
        <div className="divider__line" />
      </div>
      <div className="recent-work-container">
        <div className="centered-container">
          <h3 className="small-section-header">S.D. Hallahan Housewright Recent Work</h3>
          <div className="gallery-container">
            <img className="thumbnail" src={thumbnail} />
            <img className="thumbnail" src={thumbnail} />
            <img className="thumbnail" src={thumbnail} />
            <img className="thumbnail" src={thumbnail} />
            <img className="thumbnail" src={thumbnail} />
          </div>
        </div>
        <a className="full-gallery-link" href="#">
          View full work gallery
        </a>
      </div>
      <div className="why-us__container">
        <h3 className="small-section-header">Why S.D Hallahan Housewright</h3>
        <p>
          S.D. Hallahan Housewright has been in business for over 30 years. We have extensive
          experience in both residential and commercial construction. We take pride in our attention
          to detail and high level of customer service. Our goal is to make the building process as
          seamless and stress free as possible for our clients.
        </p>
      </div>
    </div>
  </main>
);
