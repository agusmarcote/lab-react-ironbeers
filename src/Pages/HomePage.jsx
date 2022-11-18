import AllBeers from "../assets/beers.png"
import NewBeer from "../assets/new-beer.png"
import RandomBeer from "../assets/random-beer.png"


function HomePage (){

    return(
        <div>
            <div className="beersHomePage">
                <div>
                  <img src={AllBeers} alt='allBeers' />  
                </div>
                <div>
                  <img src={NewBeer} alt='newBeers' />  
                </div>
                <div>
                  <img src={RandomBeer} alt='randomBeers' />  
                </div>
            </div>
        </div>
    )
}

export default HomePage