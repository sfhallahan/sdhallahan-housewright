import React from 'react';
import hamburgerIcon from '../img/hamburger.svg';
import Link from 'gatsby-link';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarOpen: false,
    };
  }

  toggleNavBar = () => {
    const open = this.state.navBarOpen;
    this.setState({
      navBarOpen: !open,
    });
  };

  closeNavBar = () => {
    this.setState({
      navBarOpen: false,
    });
  };

  render() {
    return (
      <header>
        <div className="header__topbar">
          <button className="nav__button" onClick={this.toggleNavBar}>
            <img className="nav__icon" src={hamburgerIcon} />
          </button>
          <Link to="/">
            <div className="title-container">
              <h1 className="title">S. D. Hallahan</h1>
              <p className="subtitle">Housewright Inc.</p>
            </div>
          </Link>
          <div className="header__contact-container">
            <a href="tel:+8603881564">
              <div className="header__contact-option">
                <svg
                  className="contact__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 1792 1792">
                  <path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" />
                </svg>

                <div className="header__contact-text">
                  <h3>Call</h3>
                  <p style={{ margin: 0 }}>Tel: (860) 388-1564</p>
                </div>
              </div>
            </a>

            <a href="mailto:steve@sdhhousewright.com">
              <div className="header__contact-option">
                <svg
                  className="contact__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 1792 1792">
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                </svg>
                <div className="header__contact-text">
                  <h3>Email</h3>
                  <p style={{ margin: 0 }}>steve@sdhhousewright.com</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          className={`nav__background-overlay ${
            this.state.navBarOpen ? 'nav__background-overlay--active' : ''
          }`}
          onClick={this.toggleNavBar}
        />
        <nav className={this.state.navBarOpen ? 'nav--open' : ''}>
          <ul className="nav__container">
            <Link
              exact
              to="/"
              className="nav__item"
              activeClassName="nav__item--active"
              onClick={this.closeNavBar}>
              <li>HOME</li>
            </Link>
            <Link
              to="/our-work/"
              className="nav__item"
              activeClassName="nav__item--active"
              onClick={this.closeNavBar}>
              <li>OUR WORK</li>
            </Link>
            <Link
              to="/about-us/"
              className="nav__item"
              activeClassName="nav__item--active"
              onClick={this.closeNavBar}>
              <li>ABOUT US</li>
            </Link>
            <Link
              to="/contact/"
              className="nav__item"
              activeClassName="nav__item--active"
              onClick={this.closeNavBar}>
              <li>CONTACT US</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}
