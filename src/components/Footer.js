import React from "react";
import "../styles/footer.css";

import vk from "../resources/icons/vk.svg";
import insta from "../resources/icons/insta.svg";
import telegram from "../resources/icons/telegram.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer_box">
          <div className="footer_box__left">
            @2020 Все права защищены
            <br />
            <a href="#">Политика конфиденциальности</a>
          </div>
          <div className="footer_box__center">
            <img src={vk} alt="vk" />
            <img src={insta} alt="insta" />
            <img src={telegram} alt="telegram" />
          </div>
          <div className="footer_box__right">
            vorzhakova.photo@mail.ru
            <br />8 (951) 809-73-33
          </div>
        </div>
      </footer>
    );
  }telegram
}

export default Footer;
