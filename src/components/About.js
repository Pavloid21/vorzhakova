import React from "react";

import "../styles/about.css";

class About extends React.Component {
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
              <a href="#" className="blog_link">
                Перейти в личный блог
              </a>
            </div>
            <div className="content_right">
              <div className="col1">
                <img src="images/11.png" alt="col1img" />
                <img src="images/12.png" alt="col1img" />
                <img src="images/13.png" alt="col1img" />
                <img src="images/14.png" alt="col1img" />
              </div>
              <div className="col2">
                <img src="images/21.png" alt="col2img" />
                <img src="images/22.png" alt="col2img" />
                <img src="images/23.png" alt="col2img" />
                <img src="images/24.png" alt="col2img" />
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
