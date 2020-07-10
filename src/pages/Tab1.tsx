import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import SliderList from "../components/SliderList";
import './Tab1.css';
import mockData from "../components/mock/data.json"

type RawMockData = {
  thumbnail: string,
  meta: Array<string>,
  instructions: Array<string>,
  ingredients: Array<string>,
  cat: string,
  name: string
}

const cats = ["latin american", "home", "beans and peas", "potatoes", "pork ribs", "vegetables", "macaroni and cheese", "shellfish", "chicken", "potato side dishes", "breakfast and brunch", "salad", "banana bread", "quick bread", "world cuisine", "eggs", "meat and seafood", "pancakes", "asian", "seafood salad", "sandwiches", "european", "meat and poultry", "fish", "pork", "chili", "appetizers and snacks", "stuffed main dishes", "soups, stews and chili", "main dishes", "stews"];

const Tab1: React.FC = () => {

  function title(str:string)
  {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const mapRawData = (raw: Array<RawMockData>) => {
    return raw.map((d, index) => ({
      src: d.thumbnail,
      desc: d.name,
      cat: d.cat,
      key: index
    }))
  }

  const catContents = () => {
    var result:Array<JSX.Element> = [];
    cats.forEach((c, index) => {
      var content = filterCat(c.split(' ')[0])
      if (content.length < 4 || c =="home") return;
      result.push(
        <SliderList 
          key={index} 
          options={slideContent} 
          cardSize={110} 
          label={title(c)} 
          data={content} 
          />
      );
    });
    return result;
  }

  const filterCat = (cat: string) => {
    return mapRawData(mockData).filter(d => d.cat.toLowerCase().indexOf(cat) != -1);
  }

  const getPopular = () => {
    return mapRawData(mockData).slice(15, 25)
  }

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader>
        </IonHeader>
        <div className="child-container">
          <SliderList
           key={-1} 
           labelSize={28} 
           options={slideContent} 
           cardSize={140} 
           label={"Popular"} 
           data={getPopular()} 
          />
          <div style={{marginBottom: 40}}></div>
          {catContents()}
        </div>
      </IonContent>
    </IonPage>
  );
};

/*const slideContentBig = {
  spaceBetween: -115,
  slidesOffsetBefore: -50,
  slidesOffsetAfter: -50
}*/
const slideContent = {
  slidesPerView: "auto",
  spaceBetween: 15,
  slidesOffsetBefore: 15,
  slidesOffsetAfter: 15
}


export default Tab1;
