
function Country({datacountrie}){

  
    return(
     <article className="countries">
      <h3>{datacountrie.name.common}</h3>
       <p>{datacountrie.capital}</p> 
       <p>{datacountrie.flag}</p>

      


     </article>
    )
    
  
  }
  
  
  export default Country