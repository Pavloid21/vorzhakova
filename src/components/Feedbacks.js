import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "../styles/feedbacks.css";
import Carousel from "react-elastic-carousel";

export default function Feedbacks() {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFF";
  });
  let resetTimeout;
  const carouselRef = useRef(null);

  const imgREF = useRef([]);

  const [items, setItems] = useState({ items: [] });
  const [comments, setComment] = useState([
    {
      author: "Алёна Мальнева",
      comment:
        "Очень довольны с мужем, что выбрали именно этого фотографа! Современный дизайн как самой работы, так и её подачи! Хотелось бы нам отметить, что Екатерина к своей работе подходит очень творчески и каждый раз пробует что-то внести своё в каждую свадьбу. Фотографии нравятся всем. Все в восторге от наших фотографий, все на высшем уровне) Всем советуем Екатерину, она мастер своего дела)",
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10", {
      method: "GET",
      headers: {
        "X-API-KEY": "32D81209-A4614EB0-BFA612CE-23A9F0DF",
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setItems(json.results);
      });
  }, []);

  const handleCarouselChange = (currentItem) => {
    imgREF.current.forEach((ref, index) => {
      if (index === currentItem.index + 1) {
        ReactDOM.findDOMNode(ref).classList.add("no_opacity");
        ReactDOM.findDOMNode(ref).parentElement.style.transition = ".5s";
        ReactDOM.findDOMNode(ref).parentElement.style.transitionProperty =
          "scale";
        ReactDOM.findDOMNode(ref).parentElement.style.scale = 1.25;
      } else {
        ReactDOM.findDOMNode(ref).classList.remove("no_opacity");
        ReactDOM.findDOMNode(ref).parentElement.style.transition = ".5s";
        ReactDOM.findDOMNode(ref).parentElement.style.transitionProperty =
          "scale";
        ReactDOM.findDOMNode(ref).parentElement.style.scale = 1;
      }
    });
  };

  useEffect(() => {
    handleCarouselChange({ index: 2 }, []);
  });

  const handleNext = ({ index }) => {
    if (index === items.length + 1) {
      carouselRef.current.goTo(1);
    }
  };

  const handlePrev = ({ index }) => {
    if (index === 0) {
      carouselRef.current.goTo(items.length);
    }
  };

  return (
    <div className="feedback">
      <div className="container">
        <h1>Отзывы клиентов</h1>
        {items.length && (
          <Carousel
            ref={carouselRef}
            itemsToShow={3}
            pagination={false}
            onChange={handleCarouselChange}
            initialActiveIndex={2}
            onNextEnd={handleNext}
            onPrevEnd={handlePrev}
            children={(() => {
              return [null, null]
                .concat(items)
                .concat([null, null])
                .map((item, index) => {
                  return (
                    <div
                      ref={(ref) => imgREF.current.push(ref)}
                      data={index}
                      className="slider_item"
                      key={`slide_${index}`}
                      style={{ left: `0px` }}
                    >
                      {item ? (
                        <img src={item.picture.large} alt="avatar" />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  );
                });
            })()}
          />
        )}
        <div className="comment">
          <div>
            <h2 className="author">{comments[0].author}</h2>
            <article>{comments[0].comment}</article>
          </div>
        </div>
        <div className="comment-form">
          <form>
            <h2>Оставьте свой отзыв</h2>
            <div className="inline">
              <div className="group">
                <input type="text" required />
                <span className="bar"></span>
                <label>Ваше имя</label>
              </div>
              <div className="group">
                <input type="text" required />
                <span className="bar"></span>
                <label>Ваше фамилия</label>
              </div>
            </div>
            <div className="inline">
              <textarea placeholder="Напишите отзыв..."></textarea>
            </div>
            <button className="btn nomargin">Опубликовать отзыв</button>
          </form>
        </div>
      </div>
    </div>
  );
}
