import React from 'react';
import masterSuiteImg from '../img/old-saybrook-master-suite.jpg';
import steveImg from '../img/steven-hallahan.jpg';

export default () => (
  <main>
    <section className="section section__about-container">
      <div className="section__about-carousel">
        <img src={masterSuiteImg} />
      </div>
      <div className="section__about-text">
        <div className="text__container">
          <h2>About S. D. Hallahan Housewright Inc.</h2>
          <p>
            S. D. Hallahan Housewright is a diversified building company. We are fully experienced
            in residential, commercial, and retail construction. All of our work is supervised by a
            principal member of our firm and we take great pride in our hands on approach. There is
            no job that is too big or too small for us. Our mission is to deliver every project on
            time and within your budget.
          </p>
        </div>
        <div className="text__container">
          <h2>Our Specialties</h2>
          <p>
            We specialize in all sorts of things. I mean all sorts. Filler text is surprisingly hard
            to do. You would think you could make stuff up very easily but its just not the case. I
            would love to come up with some excellent explanation of all the specialties of Mr.
            Steve's business but I have to create the whole website.{' '}
          </p>
        </div>
      </div>
    </section>
    <section className="section section__about-container">
      <div className="meet-the-team__container">
        <h2 className=" section__header--large">Our Team</h2>
        <p className="section__subheader">
          S. D. Hallahan Housewright is a 30 year old family owned construction business
        </p>
        <div className="divider__line" />
      </div>
      <div className="team-member__container">
        <img src={steveImg} className="team-member__img" />
        <h3 className="team-member__name">Steve Hallahan</h3>
        <p className="team-member__title">Owner/Project Manager</p>
        <div className="divider__line--small" />
        <p className="team-member__dsc">
          Steve has worked in construction his whole life. Before founding S.D. Hallahan Housewright
          Inc in 1990 he played a bunch of soccer (and worked construction). His passion is
          delivering high quality homes. Trust and itegrity are paramount in all that he does.
        </p>
      </div>
      <div className="team-member__container">
        <img src={steveImg} className="team-member__img" />
        <h3 className="team-member__name">Steve Hallahan</h3>
        <p className="team-member__title">Owner/Project Manager</p>
        <div className="divider__line--small" />
        <p className="team-member__dsc">
          Steve has worked in construction his whole life. Before founding S.D. Hallahan Housewright
          Inc in 1990 he played a bunch of soccer (and worked construction). His passion is
          delivering high quality homes. Trust and itegrity are paramount in all that he does.
        </p>
      </div>
      <div className="team-member__container">
        <img src={steveImg} className="team-member__img" />
        <h3 className="team-member__name">Steve Hallahan</h3>
        <p className="team-member__title">Owner/Project Manager</p>
        <div className="divider__line--small" />
        <p className="team-member__dsc">
          Steve has worked in construction his whole life. Before founding S.D. Hallahan Housewright
          Inc in 1990 he played a bunch of soccer (and worked construction). His passion is
          delivering high quality homes. Trust and itegrity are paramount in all that he does.
        </p>
      </div>
      <div className="team-member__container">
        <img src={steveImg} className="team-member__img" />
        <h3 className="team-member__name">Steve Hallahan</h3>
        <p className="team-member__title">Owner/Project Manager</p>
        <div className="divider__line--small" />
        <p className="team-member__dsc">
          Steve has worked in construction his whole life. Before founding S.D. Hallahan Housewright
          Inc in 1990 he played a bunch of soccer (and worked construction). His passion is
          delivering high quality homes. Trust and itegrity are paramount in all that he does.
        </p>
      </div>
    </section>
  </main>
);
