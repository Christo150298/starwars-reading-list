import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStore from "../store/appContext";
import "../styles/views/details.css"
import Button from "react-bootstrap/esm/Button";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

const DetailsPlanet = () =>{

    const navigate = useNavigate()
    const { planet } = useParams()
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${planet}.jpg `
    const {store} = useStore();
    const {planetsDetailedList} = store;
    const [planetData] = planetsDetailedList ? planetsDetailedList.filter(item => item.result.uid === planet) : null;

    return(
        <>   
            <div className="detailsContainer">
                <img src={imgSrc} alt={`planet ${planetData?.result.properties.name}`} />
                <div className="d-flex flex-column">
                    <h1>{planetData?.result.properties.name}</h1>
                    <h3>{planetData?.result.description}</h3>
                    
                    <div className="specificDetContainer">
                        <div >
                            <b> Diameter  </b>
                            <div> {planetData?.result.properties.diameter} </div>
                        </div> 
                        <div >
                            <b> Rotation period  </b>
                            <div> {planetData?.result.properties.rotation_period} </div>
                        </div> 
                        <div >
                            <b> Orbital period  </b>
                            <div> {planetData?.result.properties.orbital_period} </div>
                        </div> 
                        <div >
                            <b> Population  </b>
                            <div> {planetData?.result.properties.population} </div>
                        </div> 
                        <div >
                            <b> Climate  </b>
                            <div> {planetData?.result.properties.climate} </div>
                        </div> 
                        <div >
                            <b> Terrain  </b>
                            <div> {planetData?.result.properties.terrain} </div>
                        </div>
                    </div>
                    <div className="graphicsContainer">
                        <div>
                        <span>Diameter</span>
                            <ProgressBar striped variant="success" now={
                                (planetData?.result.properties.diameter/118000)*100
                            } label={`${planetData?.result.properties.diameter}`} />
                        </div>
                        <div >
                            <span>Population</span>
                            <ProgressBar striped variant="danger" now={
                                    (planetData?.result.properties.population/1000000000)*100
                                } label={`${planetData?.result.properties.population}`} />
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

export default DetailsPlanet
  