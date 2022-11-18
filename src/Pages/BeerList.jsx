import './BeersList.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";


const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

function BeersList () {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL)
            console.log(res.data)
            setBeers(res.data)
        }
        apiCall()
    },[])


    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div>
                {beers.map((beer) =>{
                    return (
                        <li className='beerDetail' key={beer._id}>
                            <img className='imgBeer' src={beer.image_url} />
                            {beer.name}
                            {beer.tagline}
                            {beer.contributed_by}
                            <Link to={`/beers/${beer._id}`}>See more</Link>
                        </li>
                    )
                })}
            </div>

        </div>
    )
}

export default BeersList