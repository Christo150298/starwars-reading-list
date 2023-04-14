import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CardPeople from "./CardPeople";

const Characters = () => {

    const { store, actions } = useContext(Context);
  
    return (
        <div className="card-group" id="cardGroup">
          {store.peopleProperties.map((item, index) => (
            <CardPeople key={index} properties={item.properties} uid={item.uid} index={index} description={item.description} />
          ))}
        </div>
    );
};
  
export default Characters;
