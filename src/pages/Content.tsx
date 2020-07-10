import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import SliderList from "../components/SliderList";
import './Content.css';
import mockData from "../components/mock/data.json"
import { filter } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import MockData from "../components/mock/data.json";
interface HistoryState {
  id?: number
}

type RawMockData = {
  thumbnail: string,
  meta: Array<string>,
  instructions: Array<string>,
  ingredients: Array<string>,
  cat: string,
  name: string
}

const Content: React.FC = () => {
  const history = useHistory();
  const state: any & HistoryState = history.location.state;
  var id: number = state.id || 0;
  var data: RawMockData = MockData[id];
  console.log(data);
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader>
        </IonHeader>
        <div className="child-container">
          <strong className="content-title">{data.name}</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Content;
