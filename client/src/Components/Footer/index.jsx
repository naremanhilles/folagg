import React from 'react';
import './style.css';
import im1 from '../../assets/img/v1.png';
import im2 from '../../assets/img/v2.png';
import im3 from '../../assets/img/v3.png';
import c1 from '../../assets/img/c1.webp';
import c2 from '../../assets/img/c2.webp';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="up">
        <div className="row">
          <div className="cont">
            <div className="col-sm-3">
              <h4 className="hh">
                <span className="ss">اجازة</span> رحلة و سفر
              </h4>
              <p className="yy">
                تصفح وحجز ودفع بطريقه سلسة جدا عبر موقع هلا عرب باللغة العربية
              </p>
            </div>
            <div className="col-sm-3">
              <h4 className="hh">
                <span className="ss"> العنوان</span> والاتصال{' '}
              </h4>
              <p className="yy">كزلاي - مقابل كوفان بارك - عمارة 103/6 </p>
              <p>
                {' '}
                <span className="strong yy">هاتف: </span>{' '}
                <span className="highlighted yy">+905444857818</span>{' '}
              </p>
            </div>
            <div className="col-sm-3">
              <h4 className="hh">
                <span className="ss">بطاقات</span> الدفع
              </h4>
              <div className="check">
                {' '}
                <img src={im1} />
                <img src={im2} />
                <img src={im3} />
              </div>
            </div>
            <div className="col-sm-3">
              <h4 className="hh">
                <span className="ss">بطاقات</span> الدفع
              </h4>
              <div className="check">
                {' '}
                <img style={{ width: '100%' }} src={c1} />
                <img style={{ width: '100%' }} src={c2} />
              </div>
            </div>
            {/* <div className="col-sm-3">
              <h4 className="hh">
                <span className="ss">تابعنا</span> هنا
              </h4>
              <p className="yy"> تابعنا هنا على حساباتنا </p>
              <ul className="foot-social">
                <a href="">
                  <li>
                    <i className="fab fa-facebook-f jj" aria-hidden="true" />
                  </li>
                </a>
                <a href="">
                  <li>
                    <i className="fab fa-twitter jj" aria-hidden="true" />{' '}
                  </li>
                </a>
                <a href="">
                  <li>
                    <i className="fab fa-instagram jj" aria-hidden="true" />{' '}
                  </li>
                </a>
                <li>
                  <a href="">
                    <i className="fab fa-whatsapp jj" aria-hidden="true" />
                  </a>{' '}
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer__container">
        {/* <ul className="footer__icons">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            {' '}
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin" />
          </a>
        </ul> */}
        <div className="pull-right text-uppercase  footer__heart">
          بالحب
          <i
            className="fa fa-heart"
            aria-hidden="true"
            style={{ color: '#a22a5f', padding: '0px 2px' }}
          />
          من فولاج
        </div>
        <span>© 2020 فولاج جميع الحقوق محفوظة</span>
      </div>
    </footer>
  );
}
