import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';
import logo from '../../assets/img/logo.png';

class Header extends Component {
  state = {
    totalQty: null,
    message: '',
  };

  componentDidMount() {
    fetch('/api/v1/session/value')
      .then(res => res.json())
      .then(({ value, error }) => {
        if (value.totalQty) this.setState({ totalQty: value.totalQty });
        else this.setState({ message: error.msg });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }

  render() {
    const { totalQty } = this.state;
    console.log('yar', totalQty, 47);
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
        <Navbar bg="light" expand="lg" className="Navbar__container">
          <Navbar.Brand>
            <Link to="/" className="navbar__link navbar__brand">
              <img src={logo} alt="imageLogo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navigation">
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
                <NavLink to="/shopping-cart" className="navbar__link">
                  <div className="navbar__link--text">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    سلة
                    <span className="badge">{totalQty}</span>
                  </div>
                </NavLink>
                <NavLink to="/" className="navbar__link">
                  <div className="navbar__link--text">الرئيسية</div>
                </NavLink>
              </Nav>
            </Col>
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
