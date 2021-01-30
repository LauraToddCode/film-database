import React from "react"
import FilmCard from "./FilmCard" 

const films = [
    {
        "key": "0",
        "title": "Jaws",
        "imgSrc": "https://i.imgur.com/H771jdD.jpg",
        "altFilmImg": "Jaws Poster",
        "rating": "https://i.imgur.com/ww0LWBA.png",
        "altStarRating": "5 stars"
    },
    {
        "key": "1",
        "title": "Aliens",
        "imgSrc": "https://i.imgur.com/UnnPWk3.jpg",
        "altFilmImg": "Aliens Poster",
        "rating": "https://i.imgur.com/n6EbQl9.png",
        "altStarRating": "4 stars"
    },
    {
        "key": "2",
        "title": "Bad Santa",
        "imgSrc": "https://i.imgur.com/rReXk9g.jpg",
        "altFilmImg": "Bad Santa Poster",
        "rating": "https://i.imgur.com/Uf68FDw.png",
        "altStarRating": "2 stars"
    },
    {
        "key": "3",
        "title": "Casablanca",
        "imgSrc": "https://i.imgur.com/fd7Ual4.jpg",
        "altFilmImg": "Casablanca Poster",
        "rating": "https://i.imgur.com/ww0LWBA.png",
        "altStarRating": "5 stars"
    },
    {
        "key": "4",
        "title": "Ghost",
        "imgSrc": "https://i.imgur.com/PyxhQLn.jpg",
        "altFilmImg": "Ghost Poster",
        "rating": "https://i.imgur.com/Frv1jKg.png",
        "altStarRating": "3 stars"
    },
    {
        "key": "5",
        "title": "Twister",
        "imgSrc": "https://i.imgur.com/jIAOZGG.jpg",
        "altFilmImg": "Twister Poster",
        "rating": "https://i.imgur.com/Frv1jKg.png",
        "altStarRating": "3 stars"
    },
    {
        "key": "6",
        "title": "Legally Blonde",
        "imgSrc": "https://i.imgur.com/YupsYw3.jpg",
        "altFilmImg": "Legally Blonde Poster",
        "rating": "https://i.imgur.com/n6EbQl9.png",
        "altStarRating": "4 stars"
    },
    {
        "key": "7",
        "title": "Elf",
        "imgSrc": "https://i.imgur.com/DeQaeN7.jpg",
        "altFilmImg": "Elf Poster",
        "rating": "https://i.imgur.com/n6EbQl9.png",
        "altStarRating": "4 stars"
    },
    {
        "key": "8",
        "title": "Zoolander",
        "imgSrc": "https://i.imgur.com/k7w7w8Q.jpg",
        "altFilmImg": "Zoolander Poster",
        "rating": "https://i.imgur.com/n6EbQl9.png",
        "altStarRating": "4 stars"
    }
]

const Films = films.map(film => <FilmCard src={film.imgSrc} altFilmImg={film.altFilmImg} title={film.title} rating={film.rating} altStarRating={film.altStarRating} key={film.key}/>)

function App() {
    return(
        <div id="database">
            {Films}
        </div>
    )
}

export default App