import React, { Component } from 'react'
import './style.css'

export default class Card extends Component {
    render() {
        const { img, title } = this.props.data
        return (
            <div className="service_card">
                <img src={img} alt="card_img"/>
                <desc>{title}</desc>
                <button className="btn">Подробнее</button>
            </div>
        )
    }
}
