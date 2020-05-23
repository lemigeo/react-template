import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { routes } from './router';
import RouterView from "./views/components/RouterView";

export default function App() {
  return (
    <div>
      <Router>
        <RouterView routes={routes}></RouterView>
      </Router>
    </div>
  );
}