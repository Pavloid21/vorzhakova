import React from "react";

import "../styles/about.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { image: "about/images/11.png" },
        { image: "about/images/12.png" },
        { image: "about/images/13.png" },
        { image: "about/images/14.png" },
        { image: "about/images/21.png" },
        { image: "about/images/22.png" },
        { image: "about/images/23.png" },
        { image: "about/images/24.png" },
      ],
    };
  }
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="content">
            <div className="content_left">
              <div>
                <h1>Обо мне</h1>
                <article>
                  Меня зовут Екатерина Воржакова, и я обожаю останавливать
                  моменты- радости, гордости, важного и интересного, просто
                  красивого. Итак, я фотограф.
                  <br />
                  <br />
                  Немного о себе. Мой путь к миру фотографии начался лет 8
                  назад, когда мы с любимым мужем ждали рождения сынишки. Муж
                  приобрел для данного важнейшего события нашей жизни зеркальную
                  камеру, вдохновив меня сделать не просто снимки, а снимки
                  хорошего качества, яркие, сочные, вкладывать в них теплоту рук
                  и душу. Сначала я обрабатывала снимки мужа, потом попробовала
                  снимать сама, и влюбилась в это занятие. С замиранием сердца и
                  изучала профессиональную фотографию и фотографировала,
                  фотографировала и фотографировала. Так фотография стала моим
                  хобби, а вскоре и моей работой, работой моей мечты, ведь я
                  занимаюсь тем, что идёт от души.
                  <br />
                  <br />Я буду безумно рада помочь вам сохранить ваши самые
                  яркие события, превратить их в чудесные кусочки воспоминаний,
                  которые потом не раз напомнят вам об улыбках, чувствах,
                  событиях и красоте вашей жизни.
                </article>
              </div>
              {/* <a href="#" className="blog_link">
                Перейти в личный блог
              </a> */}
            </div>
            <div className="content_right">
              <div className="col1">
                {this.state.images.map((item, index) => {
                  return index < 4 ? (
                    <img
                      src={item.image.replace('about/', '')}
                      key={`col1img${index}`}
                      alt={`col1img${index}`}
                    />
                  ) : null;
                })}
              </div>
              <div className="col2">
              {this.state.images.map((item, index) => {
                  return index > 3 ? (
                    <img
                      src={item.image.replace('about/', '')}
                      key={`col2img${index}`}
                      alt={`col2img${index}`}
                    />
                  ) : null;
                })}
              </div>
            </div>
            <h1>Обо мне</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
