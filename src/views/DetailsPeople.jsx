import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStore from "../store/appContext";
import "../styles/views/details.css"
import { Button } from "react-bootstrap";

const DetailesPeople = () => {

    const navigate = useNavigate()
    const { character } = useParams()
    const imgSrc = `https://starwars-visualguide.com/assets/img/characters/${character}.jpg `
    const {store} = useStore();
    const {charDetailedList} = store;
    const [charData] = charDetailedList ? charDetailedList.filter(item => item.result.uid === character) : null;

    return(
        <>
            <div className="detailsContainer">
                <img src={imgSrc} alt={`character ${charData?.result.properties.name}`} />
                <div className="d-flex flex-column">
                    <h1>{charData?.result.properties.name}</h1>
                    <h3>{charData?.result.description}</h3>
                    <div className="specificDetContainer">
                        <div >
                            <b> Height  </b>
                            <div> {charData?.result.properties.height} </div>
                        </div> 
                        <div >
                            <b> Weight (1g)  </b>
                            <div> {charData?.result.properties.mass} </div>
                        </div> 
                        <div >
                            <b> Hair color  </b>
                            <div> {charData?.result.properties.hair_color} </div>
                        </div> 
                        <div >
                            <b> Skin Color  </b>
                            <div> {charData?.result.properties.skin_color} </div>
                        </div> 
                        <div >
                            <b> Eyes color  </b>
                            <div> {charData?.result.properties.eye_color} </div>
                        </div> 
                        <div >
                            <b> Birth year </b>
                            <div> {charData?.result.properties.birth_year} </div>
                        </div> 
                        <div >
                            <b> Gender  </b>
                            <div> {charData?.result.properties.gender} </div>
                        </div> 
                    </div>
                    <div className="volver-button">
                        <Button type="button" className="btn-volver" variant="danger" onClick={() => navigate("/")}>Volver</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailesPeople;
  