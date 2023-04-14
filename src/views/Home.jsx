import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

import Characters from "../components/Characters.jsx";
import Planets from "../components/Planets.jsx";
import Vehicles from "../components/Vehicles.jsx";

const Home = () => {

    const { store, actions } = useContext(Context);
  
    return (
      <div className="container mt-3">
  
        <h1 className="text-danger">Characters</h1>
        {(store.peopleProperties.length !== 0) 
            ? <div id="containerCarrusel"><Characters /></div>
            : null
        }
        
        <h1 className="text-danger mt-3">Planets</h1>
        {(store.planetsProperties.length !== 0) 
            ? <div id="containerCarrusel"><Planets /></div>
            : null
        }
        
        <h1 className="text-danger mt-3">Vehicles</h1>
        {(store.vehiclesProperties.length !== 0) 
            ? <div id="containerCarrusel"><Vehicles /></div>
            : null 
        }
        
      </div>
    );
  };

  export default Home;