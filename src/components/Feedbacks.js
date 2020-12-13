import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../styles/feedbacks.css';
import Carousel from 'react-elastic-carousel'

export default function Feedbacks() {
    useEffect(() => {
        document.body.style.backgroundColor = '#FFF';
    })

    const imgREF = useRef([])

    const [items, setItems] = useState({items: []});

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10', {
            method: 'GET',
            headers: {
            'X-API-KEY': '32D81209-A4614EB0-BFA612CE-23A9F0DF',
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
            }
        })
        .then(response => response.json())
        .then(json => {
            setItems(json.results)
        })
    },
    [])

    const handleCarouselChange = (currentItem) => {
        imgREF.current.forEach((ref, index) => {
            if (index === currentItem.index + 1) {
                ReactDOM.findDOMNode(ref).classList.add('no_opacity')
                ReactDOM.findDOMNode(ref).parentElement.style.transition = '.5s'
                ReactDOM.findDOMNode(ref).parentElement.style.transitionProperty = 'scale'
                ReactDOM.findDOMNode(ref).parentElement.style.scale = 1.25
            } else {
                ReactDOM.findDOMNode(ref).classList.remove('no_opacity')
                ReactDOM.findDOMNode(ref).parentElement.style.transition = '.5s'
                ReactDOM.findDOMNode(ref).parentElement.style.transitionProperty = 'scale'
                ReactDOM.findDOMNode(ref).parentElement.style.scale = 1
            }
        })
    }

    useEffect(() => {
        handleCarouselChange({index: 2}, [])
    })

    return (
        <div className="feedback">
            <div className="container">
                <h1>Отзывы клиентов</h1>
                {items.length && 
                    <Carousel
                        itemsToShow={3}
                        pagination={false}
                        onChange={handleCarouselChange}
                        initialActiveIndex={2}
                        children={(() => {
                            return [null, null].concat(items).concat([null, null]).map((item, index) => {
                                return <div ref={ref => imgREF.current.push(ref)} data={index} className="slider_item" key={`slide_${index}`} style={{'left': `0px`}}>
                                        {item ? <img src={item.picture.large} alt="avatar" /> : <p></p>}
                                    </div>
                                })
                        })()}
                    />
                }
            </div>
        </div>
    )
}