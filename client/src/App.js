import { useState, useEffect } from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Loading } from 'components/Loading/Loading';

//* Stylesheets
import './App.css';
import { Routes } from "routes/routes";


function App() {

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {isVisible ? <Loading  /> : null}
          <Routes />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



