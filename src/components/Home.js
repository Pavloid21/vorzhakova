import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import Footer from './Footer'
import '../styles/home.css';
import 'react-alice-carousel/lib/alice-carousel.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [
                {image: 'carousel/img1.png'},
                {image: 'carousel/img2.png'},
                {image: 'carousel/img3.png'},
                {image: 'carousel/img4.png'},
                {image: 'carousel/img5.png'},
            ]
        }
        this.items = this.state.imgList.map((img, i) => {
            return <img className="runner_img" key={`carousel_${i}`} src={img.image} alt="IMG"></img>
        })
    }
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="hero">
                        <span className="subtitle">ФОТОГРАФ</span>
                        <h1 className="title">Екатерина Воржакова</h1>
                        <section>
                            Рада приветствовать Вас на своём сайте!
                            Меня зовут Екатерина Воржакова - я фотограф из Челябинска.
                        </section>
                        <button className="btn">
                            Заказать съёмку
                        </button>
                    </div>
                    <div className="runner-box">
                        <AliceCarousel 
                            autoPlay
                            autoPlayInterval={2000}
                            animationType="fadeout" 
                            disableButtonsControls
                            disableDotsControls
                            responsive={{
                                320: {
                                    items: 1
                                },
                                900: {
                                    items: 3
                                },
                                1300: {
                                    items: 5
                                }
                            }}
                            items={this.items}
                        >
                        </AliceCarousel>
                    </div>
                    <div className="credo">
                        <div className="container">
                            <img className="credo_img" src="credo.png" alt="IMG" />
                            <div className="credo_text">
                                «Фотография – это способ чувствовать, трогать, любить.<br />
                                То, что вы поймали на пленке, запечатлено навсегда …<br />
                                Оно помнит мелочи, даже после того, как Вы всё забыли ».<br />
                                – Аарон Сискинд

                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;