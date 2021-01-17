import React, { useEffect, useState } from "react";
import "../styles/contacts.css";
import bgd from "../resources/contacts_bg.jpg";
import vk from "../resources/icons/vk.svg";
import insta from "../resources/icons/insta.svg";
import telegram from "../resources/icons/telegram.svg";
import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";

export default function Contacts() {
  useEffect(() => {
    console.log("bgd :>> ", typeof bgd);
    document.body.style.backgroundImage = `url(${bgd})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "bottom";
    document.querySelector("#root").style.background = "rgba(57, 55, 55, .3)";
  }, []);
  const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "Open Sans",
      width: "100%"
    },
    formControl: {
      position: "relative",
      pointerEvents: "all"
    },
  }));
  const classes = useStyles();
  const [policyAccepted, setAccept] = useState(false);
  const handlePolicy = () => {
    setAccept(!policyAccepted);
  };
  return (
    <div className="contacts">
      <div className="container">
        <div className="block">
          <h1>Контакты</h1>
          <p>+7 951 809-73-33</p>
          <p className="mb">vorzhakova.photo@mail.ru</p>
          <hr className="mb" />
          <div className="socials">
            <img src={vk} alt="vk" />
            <img src={insta} alt="insta" />
            <img src={telegram} alt="telegram" />
          </div>
        </div>
        <div className="flexbox">
          <div className="form-container">
            <form>
              <TextField className={classes.root + " mb"} label="Ваше имя" required />
              <TextField className={classes.root + " mb"} label="Ваша эл. почта" required />
              <TextField className={classes.root} label="Ваш комментарий" required />
              <FormControlLabel
                className={classes.formControl}
                control={
                  <Checkbox
                    name="policy"
                    checked={policyAccepted}
                    onChange={handlePolicy}
                  />
                }
                label="Я даю согласие на обработку персональных данных"
              />
              <button className="btn" style={{marginBottom: 0}}>Заказать съемку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
