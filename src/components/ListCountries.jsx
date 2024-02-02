import Country from "./Country"

function ListCountries ({countries}){

    const mapeoCountries=()=>{
        return countries.map((countr,i)=><li key={i}> <Country datacountrie={countr}/> </li>)

    }
  
    return(

     <ul>
      {mapeoCountries()}
     </ul>
    )
    
  
  }
  
  
  export default ListCountries