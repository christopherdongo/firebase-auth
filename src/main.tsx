import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";


const persistConfiguration = {
  key: "root",
  version: 1,
  storage,
};


const persReducer = persistReducer(persistConfiguration, store)

const confStore = configureStore({
  reducer: persReducer
})

const persistor = persistStore(confStore);



createRoot(document.getElementById('root')!).render(
  <Provider store={confStore}>
    <PersistGate loading={null} persistor={persistor}>
    <StrictMode>
    <App />
  </StrictMode>,
    </PersistGate>
  </Provider>

)
