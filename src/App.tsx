import React from 'react';
import {createMemoryHistory} from 'history'
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, bookOutline, bookmarkOutline, settingsOutline } from 'ionicons/icons';
import Browse from './pages/Browse';
import Saved from './pages/Saved';
import Tab3 from './pages/Tab3';
import Content from "./pages/Content";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const history:any = createMemoryHistory({
    initialEntries: ["/recipe-sample-app/","/recipe-sample-app/browse"]
  })
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/recipe-sample-app/browse" component={Browse} exact={true} />
            <Route path="/recipe-sample-app/saved" component={Saved} exact={true} />
            <Route path="/recipe-sample-app/settings" component={Tab3} />
            <Route path="/recipe-sample-app/content" component={Content} exact={true}/>
            <Route path="/recipe-sample-app/" render={() => <Redirect to="/recipe-sample-app/browse" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="browse" href="/recipe-sample-app/browse">
              <IonIcon icon={bookOutline} />
              <IonLabel>Browse</IonLabel>
            </IonTabButton>
            <IonTabButton tab="saved" href="/recipe-sample-app/saved">
              <IonIcon icon={bookmarkOutline} />
              <IonLabel>Saved</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
