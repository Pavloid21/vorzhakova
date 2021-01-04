import React from "react";
import Footer from "./Footer";
import Card from "./views/Card";
import "../styles/servicies.css";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          img:
            "https://img1.fonwall.ru/o/hu/forest-trees-fog.jpg?route=mid&h=750",
          title: "Индивидуальная фотосъёмка",
        },
        {
          id: 2,
          img:
            "https://img1.fonwall.ru/o/hu/forest-trees-fog.jpg?route=mid&h=750",
          title: "Love-Story фотосъёмка",
        },
        {
          id: 3,
          img:
            "https://img1.fonwall.ru/o/hu/forest-trees-fog.jpg?route=mid&h=750",
          title: "Свадебная фотосъёмка",
        },
        {
          id: 4,
          img:
            "https://img1.fonwall.ru/o/hu/forest-trees-fog.jpg?route=mid&h=750",
          title: "В ожидании чуда",
        },
        {
          id: 5,
          img:
            "https://img1.fonwall.ru/o/hu/forest-trees-fog.jpg?route=mid&h=750",
          title: "Ньюборн фотосъёмка",
        },
        {
          id: 6,
          img:
            "https://img1.fonwall.ru/o/hu/forest-trees-fog.jpg?route=mid&h=750",
          title: "Семейная фотосъёмка",
        },
      ],
    };
  }

  render() {
    return (
      <div className="servicies">
        <div className="container">
          <h1>Услуги</h1>
          <div className="card_container">
            {this.state.cards.map((card) => {
              return <Card data={card} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
