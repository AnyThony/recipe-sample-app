import React from 'react';
import './SliderList.css';
import { IonSlides, IonSlide } from '@ionic/react';
import ShowcaseImg from "./ShowcaseImg";
interface ContainerProps {
  key: number;
  label: string;
  cardSize: number;
  options?: object;
  labelSize?: number;
  data: Array<cardData>;
}

type cardData = {
  key: number,
  cat: string,
  desc: string,
  src: string
}

const SliderList: React.FC<ContainerProps> = ({ label, data, cardSize, options={}, labelSize=0 }) => {

  const populate = (data:Array<cardData>) => {
    return data.map((d: cardData, index: number)=> (
      <IonSlide key={index}>
        <ShowcaseImg id={d.key} key={d.key} cardSize={cardSize} desc={d.desc} src={d.src} />
      </IonSlide>
    ))
  }

  return (
    <div className="slider-list">
      <strong className="section-title" style={labelSize ? {fontSize: labelSize} : {}}>{label}</strong>
      <IonSlides options={{ height: 150, freeMode: true, ...options }}>
        {populate(data)}
      </IonSlides>
    </div>
  );
};

export default SliderList;
