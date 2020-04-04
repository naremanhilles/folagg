import React, { Component } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import './style.css';
import Slider from './Slider';
import CardRow from './CardRow/Cards';
import ProductsCard from './ProductsCard/Cards';

export default class LandingPage extends Component {
  state = {
    products: [],
    message: '',
  };

  componentDidMount() {
    fetch(`/api/v1/products/`)
      .then(res => res.json())
      .then(({ data, error }) => {
        console.log(1, data);
        if (data) this.setState({ products: data });
        else this.setState({ message: error.msg });
      })
      .catch(er => {
        console.log('44444', er);

        this.setState({ message: er.message });
      });
  }

  render() {
    const { products, message } = this.state;

    return (
      <>
        <Row className="landing__header">
          <Col>
            <h1 className="landing__tweet">
              زيوت فولاج من زيت جوز الهند وأعشاب طبيعية 100% براءة اختراع
              ألمانية لا تحتوي على أي اضافات ومناسبة لجميع الأعمار فولاج أسلوب
              حياة
            </h1>
            <div className="btn__tweet__div">
              <a href="/" className="btn__tweet">
                تسوق معنا الآن
                <i className="fa fa-power-off" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="spe-title">
          <h2>
            {' '}
            زيت فولاج <span>الطبيعي لشعر</span>{' '}
          </h2>
          <div className="title-line">
            <div className="tl-1" />
            <div className="tl-2" />
            <div className="tl-3" />
          </div>
        </div>
        <CardRow />

        <Row className="landing__aboutus">
          <Col className="about__img" />
          <Col className="about__info">
            <h2 className="landing__title">فولاج أسلوب حياة</h2>
            <p className="about__paragraph">
              زيوت فولاج من زيت جوز الهند وأعشاب طبيعية 100% وبدون إضافات
              كيميائية وحاصلة على براءة اختراع من ألمانية و ترخيص صناعي بالإضافة
              إلى أنه ماركة مسجلة,القوارير مصنوعة في النمسا أغطيتها مصنوعة من
              إيطاليا جميعها مطابقة للمواصفات والمقاييس السعودية
              <br />
              <br />
              فوائد زيت فولاج وحدها ما منحته الشهرة الواسعة والانتشار سواء في
              العالم العربي أو على مستوى العالم، ولا يتوقف الأمر على الحصول على
              فائدة منه فقط بل لأنها تظهر سريعا وفي وقت قياسي على عكس المنتجات
              الأخرى
            </p>
          </Col>
        </Row>
        <div className="spe-title">
          <h2>
            {' '}
            منتجات زيت <span>فولاج المتنوعة</span>{' '}
          </h2>
          <div className="title-line">
            <div className="tl-1" />
            <div className="tl-2" />
            <div className="tl-3" />
          </div>
        </div>
        {message && <Alert variant="danger">{message}</Alert>}
        {products ? (
          products.map(item => {
            return <ProductsCard items={item} />;
          })
        ) : (
          <div className="saved-offer__spinner">
            {' '}
            <Spinner animation="border" variant="info" />
          </div>
        )}
        <Slider />

        <div className="player-wrapper">
          <p className="part">hgdgf</p>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=s99PkSqisik&_=2"
            controls="true"
          />
        </div>

        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=a1W19Zy8aUs&_=1"
            controls="true"
          />
          <p className="part">trttttttttttttt</p>
        </div>
        <div>
          <div className="player-wrapper">
            <div className="elfsight-app-bd0b8215-8249-4779-ace8-ca2b1907ba3a widgit" />
            <p className="part">hgdgf</p>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=s99PkSqisik&_=2"
              controls="true"
            />
          </div>
          <div className="icon-float">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/%D9%87%D9%84%D8%A7-%D8%B9%D8%B1%D8%A8-Hla-Arab-226839431397954/"
                  className="fb1"
                >
                  <i className="fab fa-facebook" aria-hidden="true" />
                </a>{' '}
              </li>
              <li>
                <a href="https://twitter.com/halaarab3" className="tw1">
                  <i className="fab fa-twitter" aria-hidden="true" />
                </a>{' '}
              </li>
              <li>
                <a href="https://wa.me/905444857818" className="wa1">
                  <i className="fab fa-whatsapp" aria-hidden="true" />
                </a>{' '}
              </li>
              <li>
                <a
                  href="https://www.instagram.com/halarab.co/"
                  className="inst"
                >
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>{' '}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
