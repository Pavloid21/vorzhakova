import React from 'react';
import '../styles/header.css';

import logo from '../resources/EV_2 1.png';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.menuItems = [
            {link: '/', content: 'Главная'},
            {link: '/about', content: 'Обо мне'},
            {link: '/servicies', content: 'Услуги'},
            {link: '/', content: logo},
            {link: '/pholio', content: 'Портфолио'},
            {link: '/feedback', content: 'Отзывы'},
            {link: '/contacts', content: 'Контакты'}
        ]
    }

    render() {
        window.addEventListener('scroll', (event) => {
            let header = document.querySelector('.header');
            header.style.opacity = .55 + window.scrollY / 700
        })
        return (
            <nav className="header">
                <div className="header-body">
                    <ul>
                        <li className='burger_item'>
                            <div className="burger"></div>
                        </li>
                        {
                            this.menuItems.map((item, i) => {
                                let loc = window.location.pathname
                                return (
                                    <li key={`li-${i}`}>
                                        <a href={`${item.link}`} className={loc === item.link || loc === item.link + '/' ? 'active' : ''}>
                                            {
                                                item.content.indexOf('data:image') >= 0 ?
                                                    <img src={item.content} alt="LOGO"></img> :
                                                    item.content
                                            }
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;