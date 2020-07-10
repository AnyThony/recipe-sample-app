import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import SliderList from "../components/SliderList";
import './Tab1.css';
import mockData from "../components/mock/data.json"
import { filter } from 'ionicons/icons';

interface ContainerProps {
  id: number
}

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader>
        </IonHeader>
        <div className="child-container">
          <strong>test</strong>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
