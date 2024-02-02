import "../scss/App.scss"
import countries from "../service/data.json";
import ListCountries from "./ListCountries";
function App(){

  
  return(

    <div>
    <h1>Country Info App</h1>
    <ListCountries countries ={countries}/>
    </div>
  )
  

}


export default App
