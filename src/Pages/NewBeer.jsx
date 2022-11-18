import './NewBeer.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react'
import axios from "axios";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/new"

function NewBeer () {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuation, setAttenuation] = useState("")
    const [contributed, setContributed] = useState("")

    const navigate = useNavigate()


    const nameHandler = (event) => setName(event.target.value)
    const taglineHandler = (event) => setTagline(event.target.value)
    const descriptionHandler = (event) => setDescription(event.target.value)
    const firstBrewedHandler = (event) => setFirstBrewed(event.target.value)
    const brewersTipsHandler = (event) => setBrewersTips(event.target.value)
    const attenuationHandler = (event) => setAttenuation(event.target.value)
    const contributedHandler = (event) => setContributed(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault()

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuation,
            contributed_by: contributed,
        }

        console.log(newBeer)

        const postApi = async () => {
            try {
               const res = await axios.post(apiEndpoint, newBeer)
               console.log(res)
               navigate("/")
            } catch (error) {
               console.log(error)
            }
        }


        postApi()


        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuation(0)
        setContributed("")

    }
    



    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>New Beer</h1>
            <form onSubmit={submitHandler}>
                    <label>Name</label>
                    <input type="text" name='name' value={name} onChange={nameHandler}/>
                    <br />

                    <label>Tagline</label>
                    <input type="text" name='tagline' value={tagline} onChange={taglineHandler}/>
                    <br />
                    
                    <label>Description</label>
                    <input type="text" name='description' value={description} onChange={descriptionHandler}/>
                    <br />
                    
                    <label>First Brewe</label>
                    <input type="text" name='firstBrewe' value={firstBrewed} onChange={firstBrewedHandler}/>
                    <br />
                    
                    <label>Brewers Tip</label>
                    <input type="text" name='brewersTip' value={brewersTips} onChange={brewersTipsHandler}/>
                    <br />
                    
                    <label>Attenuation Level</label>
                    <input type="number" name='attenuationLevel' value={attenuation} onChange={attenuationHandler}/>
                    <br />
                    
                    <label>Contributed by</label>
                    <input type="text" name='contributedBy' value={contributed} onChange={contributedHandler}/>
                    <br />
                    
                    <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default NewBeer