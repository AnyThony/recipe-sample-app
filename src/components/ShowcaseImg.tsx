import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import './ShowcaseImg.css';

interface ContainerProps {
  key: number;
  id: number;
  desc: string;
  cardSize: number;
  src: string;
}

const ShowcaseImg: React.FC<ContainerProps> = ({ desc, src, cardSize, id }) => {
  const history = useHistory();
  const clicked = () => {
    console.log(desc, id);
    history.push("/content", {});
  }

  return (
    <div onClick={clicked} className="showcase-img" style={{height: cardSize+"px", width: (cardSize*(4/3))+"px"}}>
        <img src={src}></img>
        <div className="grad-cover"></div>
        <strong className="desc">{desc}</strong>
    </div>
  );
};

export default ShowcaseImg;
