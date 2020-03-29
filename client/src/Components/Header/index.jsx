import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Col, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Notification from './Notification';
import './style.css';
import logo from '../../assets/img/logo.png';

class Header extends Component {
  state = {
    userInfo: {
      fullName: null,
      username: null,
      avatar: null,
      defaultAvatar: '',
    },
  };

  render() {
    const { islogged } = this.props;
    const {
      userInfo: { username, avatar, defaultAvatar },
    } = this.state;
    return (
      <>
        <div style={{ height: '45px' }}>
          <div className="ed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="ed-com-t1-left">
                    <ul>
                      <li>
                        <a href="/">Phone: +905444857818</a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/%D9%87%D9%84%D8%A7-%D8%B9%D8%B1%D8%A8-Hla-Arab-226839431397954/">
                          <li>
                            <i className="fab fa-facebook" aria-hidden="true" />{' '}
                          </li>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/halaarab3">
                          <li>
                            <i className="fab fa-twitter" aria-hidden="true" />{' '}
                          </li>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ed-com-t1-right">
                    <ul>
                      <li>
                        <a href="/login">تسجيل الدخول</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bbbb */}
        <Navbar bg="light" expand="lg" className="Navbar__container">
          <Navbar.Brand>
            <Link to="/" className="navbar__link navbar__brand">
              <img src={logo} alt="imageLogo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navigation">
            {!islogged && (
              <Col md="auto">
                <Nav>
                  <NavLink to="/Signup" className="navbar__link">
                    <div className="navbar__link--text">إنشاء حساب</div>
                  </NavLink>
                  <NavLink to="/login" className="navbar__link">
                    <div className="navbar__link--text">سجل الدخول</div>
                  </NavLink>
                  <NavLink to="/shopping" className="navbar__link">
                    <div className="navbar__link--text">تسوق</div>
                  </NavLink>
                  <NavLink to="/home" className="navbar__link">
                    <div className="navbar__link--text">الرئيسية</div>
                  </NavLink>
                </Nav>
              </Col>
            )}
            {islogged && (
              <>
                <Col md="auto">
                  <Nav>
                    <NavLink to="/home" className="navbar__link">
                      <div className="navbar__link--text">Home</div>
                    </NavLink>

                    <NavLink to="/app/my-applications" className="navbar__link">
                      <div className="navbar__link--text">My Applications</div>
                    </NavLink>

                    <NavLink to="/app/my-offers" className="navbar__link">
                      <div className="navbar__link--text">My Offers</div>
                    </NavLink>

                    <NavLink to="/app/saved-offers" className="navbar__link">
                      <div className="navbar__link--text">Saved Offers</div>
                    </NavLink>

                    <NavLink to="/app/new-offer" className="navbar__link">
                      <div className="navbar__link--text">New Offer</div>
                    </NavLink>
                  </Nav>
                </Col>
                <Col md="auto">
                  {/* frop down menu to show member profile and logout */}
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="nav__dropdown"
                    >
                      <img
                        src={avatar || defaultAvatar}
                        alt="Avatar"
                        className="nav__avatar"
                      />{' '}
                      {'    '}
                      <span>{username}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown__menu-avatar">
                      <Dropdown.Item
                        as={Link}
                        to={`/app/profile/${username}`}
                        className="dropdown__item"
                      >
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        // to="/logout"
                        onClick={this.handleLogout}
                        className="dropdown__item"
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col md="auto">
                  <Notification />
                </Col>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
// prop types validation
Header.propTypes = {
  islogged: PropTypes.bool.isRequired,
};

export default withRouter(Header);
