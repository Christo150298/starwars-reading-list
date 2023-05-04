import React from "react";
import "../styles/components/card.css"
import useStore from "../store/appContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const CharacterCard = ({name,id}) => {

    const imgSrc = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    const {store, actions} = useStore();
    const {charDetailedList , favoritesList} = store;
    const { handleNewFavorite, handleDelFavorite } = actions;
    const [charData] = charDetailedList ? charDetailedList.filter(item => item.result.uid === id) : null;
    const favorite = favoritesList.filter((item) => item.name === name).length ? true : false

    return(
        <Card bg="dark" text="light" >
        <Card.Img src={imgSrc} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text><b>Gender</b> : {charData ? charData.result.properties.gender : <Spinner animation="grow" variant="danger" />}</Card.Text>
            <Card.Text><b>Eye color</b> : {charData ? charData.result.properties.eye_color : <Spinner animation="grow" variant="warning" />}</Card.Text>
            <Card.Text><b>Hair color</b> : {charData ? charData.result.properties.hair_color : <Spinner animation="grow" variant="primary" />}</Card.Text>
            <div className="d-flex justify-content-between">
                <Link className="btn btn-primary" to={`/chardetails/${id}`} >Leer Más</Link>
                <Button  variant={favorite ? "danger":"secondary" }  onClick={() => !favorite ? handleNewFavorite(name,id,"chardetails") : handleDelFavorite(name)} >&#10084;</Button>
            </div>
        </Card.Body>
        </Card>
    );
};

export default CharacterCard;