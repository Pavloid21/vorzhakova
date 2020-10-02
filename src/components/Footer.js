import React from 'react';
import '../styles/footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer_box">
                    <div className="footer_box__left">
                        @2020 Все права защищены<br />
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                    <div className="footer_box__center">
                        <img src="icons/vk.svg" alt="vk" />
                        <img src="icons/insta.svg" alt="insta" />
                        <img src="icons/facebook.svg" alt="facebook" />
                    </div>
                    <div className="footer_box__right">
                        vorzhakova.photo@mail.ru<br />
                        8 (951) 809-73-33
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer