import React from 'react';
import style from "./GoBack.module.scss"
import { ReactComponent as GoBackSVG } from "../../assets/pictures/svg/goBackArrow.svg"



const GoBack: React.FC = () => {


  return (
    <a
      href='https://christianclee.github.io/containerPortfolio/'
      className={style.wrapper}
    >
      <GoBackSVG className={style.picture} />
    </a>
   
  );
}
export default GoBack;