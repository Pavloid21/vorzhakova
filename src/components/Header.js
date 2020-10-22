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

    burgerClick = (e) => {
        let burger = document.querySelector('.burger')
        let burgerItem = document.querySelector('.burger_item')
        let header = document.querySelector('.header')
        let navDropdown = document.querySelector('.nav_dropdown')
        burger.classList.toggle('expand')
        burgerItem.classList.toggle('expand')
        header.classList.toggle('expand')
        navDropdown.classList.toggle('show')
    }

    render() {
        window.addEventListener('scroll', (event) => {
            let header = document.querySelector('.header');
            header.style.opacity = .55 + window.scrollY / 700
        })
        return (
            <nav className="header" onClick={this.burgerClick}>
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
                    <div class="nav_dropdown">
                        <div className="header_body">
                            {
                                this.menuItems.map((item, i) => {
                                    let loc = window.location.pathname
                                    return item.content.indexOf('data:image') >= 0 ? null : (
                                        <a href={`${item.link}`} className={loc === item.link || loc === item.link + '/' ? 'active' : ''}>
                                            {
                                                item.content
                                            }
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </nav>
        )
    }
}

export default Header;