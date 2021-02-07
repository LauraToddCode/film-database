import React from "react";

function FilmCard(props) {
    return(
        <div className="filmCard">
            <img className="filmImg" src={props.src} alt={props.altFilmImg}/>
            <h2 className="filmTitle">{props.title}</h2>
            <div className="ratingBlock"><img className="ratingImg" src={props.rating} alt={props.altStarRating}/></div>
        </div>
    )
}

export default FilmCard