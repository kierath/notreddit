import React, {useEffect, useState} from "react";
import "./header.css";


const Header = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) =>{
        e.preventDefault();
        setSearchInput(e.target.value);
    }

return (
    <div className="Header">
        <div className ="logo">        
        <img src = "Resources/redditlogo.png"></img>
        <span className ="red">gaming</span> reddit
        </div>
        <form className = "search-form">
        <input 
        type = "text"
        placeholder = "Search here"
        onChange = {handleChange}
        value = {searchInput} 
        className = "search"/>
        <button 
        type = "submit"
        className = "search-button"
        aria-label = "Search">
            Search
        </button>
        </form>
    </div>
);
}

export default Header;