import React, { useState, useEffect, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import './Content.css';
import SaveButton from "../components/SaveButton";
import { useHistory } from "react-router-dom";
import MockData from "../components/mock/data.json";
import { titleFirstOnly } from "../util";
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
  var id: number = (state && state.id) || 0;
  var data: RawMockData = MockData[id];
  var [saved, toggleSave] = useState(false);
  useEffect(() => {
    toggleSave(itemSaved())
  }, [id]);

  function saveStore(store: Array<number>) {
    localStorage["saved"] = JSON.stringify(store);
    toggleSave(!saved);
  }

  function itemSaved() {
    var store = JSON.parse(localStorage["saved"] || "[]");
    return store.includes(id);
  }

  function onClick() {
    var store = JSON.parse(localStorage["saved"] || "[]");
    console.log(store);
    for (let i = 0; i < store.length; i++) {
      if (store[i] === id) {
        store.splice(i, 1);
        saveStore(store);
        return;
      }
    }
    store.push(id);
    saveStore(store);
  }

  function handleBack() {
    history.replace(state.prev, {
      id: id
    });
  }

  return (
    <IonPage >
      <IonHeader>
      </IonHeader>
      <IonContent className="main-content">
        <IonHeader>
        </IonHeader>
        <div className="navback-bar">
          <IonIcon onClick={handleBack} icon={chevronBackOutline} />
        </div>
        <div className="recipe-image">
          <img src={data.thumbnail}></img>
        </div>
        <div className="child-container">
          <strong className="content-title">{data.name}</strong>
          <div className="info-container">
            <strong>General Info</strong>
            <ul>
              {
                data.meta.map((m, index) => {
                  return (<li key={index}>{titleFirstOnly(m)}</li>);
                })
              }
            </ul>
          </div>
          <div className="info-container">
            <strong>Ingredients</strong>
            <ul>
              {
                data.ingredients.map((m, index) => {
                  return (<li key={index}>{titleFirstOnly(m)}</li>);
                })
              }
            </ul>
          </div>
          <div className="info-container">
            <strong>Instructions</strong>
            <ol>
              {
                data.instructions.map((m, index) => {
                  return (<li key={index}>{titleFirstOnly(m)}</li>);
                })
              }
            </ol>
          </div>
        </div>
        <SaveButton enabled={!saved} clicked={onClick} />
      </IonContent>
    </IonPage>
  );
};

export default Content;
