import React from "react";
import './App.scss';
import {NotificationProvider} from "./notifications/NotificationProvider";
import NotificationService from "./notifications/NotificationService";
import DemoPage from "./DemoPage/DemoPage";

function App() {
    return (
      <div className="App">
          <NotificationProvider>
              <NotificationService maxAmount={6} />
              <DemoPage />
          </NotificationProvider>
      </div>
  );
}

export default App;
