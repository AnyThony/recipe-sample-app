import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import SliderList from "../components/SliderList";
import './Browse.css';
import mockData from "../components/mock/data.json"
import {title} from "../util";

type RawMockData = {
  thumbnail: string,
  meta: Array<string>,
  instructions: Array<string>,
  ingredients: Array<string>,
  cat: string,
  name: string
}

// Categories
const cats = ["latin american", "home", "beans and peas", "potatoes", "pork ribs", "vegetables", "macaroni and cheese", "shellfish", "chicken", "potato side dishes", "breakfast and brunch", "salad", "banana bread", "quick bread", "world cuisine", "eggs", "meat and seafood", "pancakes", "asian", "seafood salad", "sandwiches", "european", "meat and poultry", "fish", "pork", "chili", "appetizers and snacks", "stuffed main dishes", "soups, stews and chili", "main dishes", "stews"];

const Browse: React.FC = () => {

  // Map data to feed into SliderList components
  const mapRawData = (raw: Array<RawMockData>) => {
    return raw.map((d, index) => ({
      src: d.thumbnail,
      desc: d.name,
      cat: d.cat,
      key: index
    }))
  }

  // Get recipe contents mapped to their categories
  // Filtered to only return categories with >= 5 recipes
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

  // Filter recipes by category
  const filterCat = (cat: string) => {
    return mapRawData(mockData).filter(d => d.cat.toLowerCase().indexOf(cat) != -1);
  }

  // Get mock popular; just return some recipes for show
  const getPopular = () => {
    return mapRawData(mockData).slice(15, 25)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="main-content">
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recipes</IonTitle>
          </IonToolbar>
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

const slideContent = {
  slidesPerView: "auto",
  spaceBetween: 15,
  slidesOffsetBefore: 15,
  slidesOffsetAfter: 15
}


export default Browse;
