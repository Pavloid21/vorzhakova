import React from 'react';
import '../styles/header.css';

import logo from '../resources/EV_2 1.png';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.menuItems = [
            {link: '/home', content: 'Главная'},
            {link: '/about', content: 'Обо мне'},
            {link: '/servicies', content: 'Услуги'},
            {link: '/home', content: logo},
            {link: '/pholio', content: 'Портфолио'},
            {link: '/feedback', content: 'Отзывы'},
            {link: '/contacts', content: 'Контакты'}
        ]
    }

    render() {
        return (
            <nav className="header">
                <div className="header-body">
                    <ul>
                        {
                            this.menuItems.map((item, i) => {
                                return <li key={`li-${i}`}>
                                    <a href={`${item.link}`} className={window.location.href.indexOf(item.link) >= 0 ? 'active' : ''}>
                                        {
                                            item.content.indexOf('data:image') >= 0 ?
                                                <img src={item.content} alt="LOGO"></img> :
                                                item.content
                                        }
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;