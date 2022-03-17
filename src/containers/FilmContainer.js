import {useState} from 'react'
import Buttons from '../components/Buttons'
import Film from '../components/Film'

// The container will contain all the logics e.g all button click functions defined here and passed down as props




const FilmContainer = () => {

    // Create a state for holding all films
    const [allFilms, setAllFilms] = useState(
        [
            {
                "title": "Alien",
                "duration": 117,
                "rating": "18",
                "cast": [
                    {
                        "name": "Sigourney Weaver"
                    }
                ],
                "director": {
                    "name": "Ridley Scott"
                }
            },
            {
                "title": "The Imitation Game",
                "duration": 114,
                "rating": "12A",
                "cast": [
                    {
                        "name": "Benedict Cumberbatch"
                    }
                ],
                "director": {
                    "name": "Morten Tyldum"
                }
            },
            {
                "title": "Iron Man",
                "duration": 126,
                "rating": "12A",
                "cast": [
                    {
                        "name": "Robert Downey Jr"
                    },
                    {
                        "name": "Gwyneth Paltrow"
                    }
                ],
                "director": {
                    "name": "Jon Favreau"
                }
            },
            {
                "title": "The Martian",
                "duration": 144,
                "rating": "12A",
                "cast": [
                    {
                        "name": "Matt Damon"
                    },
                    {
                        "name": "Sean Bean"
                    }
                ],
                "director": {
                    "name": "Ridley Scott"
                }
            }
        ]
    )


    // Create a state for keeping track of current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Want buttons to increment/decrement currentIndex -
    // Do button click logics here - but pass into Buttons component as props
    
    const incrementCurrentIndex = () => {
        console.log('Clicked button');
    }






  return (
    <>
    <h1>Data Base of Movies on the Internet</h1>
    <Buttons handleNextButtonClick={incrementCurrentIndex}/>
    <Film film={allFilms[currentIndex]} />
    </>
  )
}

export default FilmContainer;

