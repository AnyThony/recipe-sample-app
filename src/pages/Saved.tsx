import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ShowcaseImg from "../components/ShowcaseImg";
import './Saved.css';
import MockData from "../components/mock/data.json";
const Saved: React.FC = () => {

  // Populate data with recipe content in save store
  function populate(){
    var store = JSON.parse(localStorage["saved"] || "[]");
    return store.map((s: number, index: number) => { 
      var data = MockData[s];
      
      return (
        <ShowcaseImg 
          id={s} 
          key={index} 
          cardSize={200} 
          desc={data.name} 
          src={data.thumbnail} 
        />)
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Saved</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Saved</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="saved-container">
          {populate()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Saved;
