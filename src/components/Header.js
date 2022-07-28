import React from 'react'
import search from "./search.png"









function Header() {
  return (
    <header>
        
        <h1> Tales from the Crypto</h1>
        <div>
          
        </div>
        <div className='div-but' id="div-but">
        <div className="search-bar" id="search-bar">
            <div>
                <img className="search-icon" id="search-icon" src={search}>

                </img>
            </div>
            <input type="text" placeholder='Search for cryptocurrency'></input>
        </div>
        <div><button className="search-button" id="search-button" onClick={()=>{
          alert("Functionality yet to be added")
        }}>Search</button></div>
        </div>
        

    </header>
  )
}

export default Header;