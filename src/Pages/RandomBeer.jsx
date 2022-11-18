import './RandomBeer.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeer() {
    const [beer, setBeers] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL)
            console.log(res.data)
            setBeers(res.data)
        }
        apiCall()
    }, [])

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div>
                <h1>Beer Details</h1>
                <img className='imgBeer' src={beer.image_url} />
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h4>{beer.first_brewed}</h4>
                <h5>{beer.attenuation_level}</h5>
                <p>{beer.description}</p>
                <h4>{beer.contributed_by}</h4>
            </div>
        </div>
    )
}


export default RandomBeer