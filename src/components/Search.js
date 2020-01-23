import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    const [city, setCity] = useState('');

    const handleFormSubmit = (event) => {
        // Prevent form default
        event.preventDefault();
        props.loadCityWeather(city);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label>City name</label>
                <input type="search" placeholder="London, Paris, Madrid, New york, Casablanca ..." className="form-control" aria-describedby="cityNameHelp"
                       onChange={(event) => setCity(event.target.value)}/>
                <small id="cityNameHelp" className="form-text text-muted">Search a weather's city</small>
            </div>
            <button className={props.loading ? ' btn btn-primary btn-block + props.loading disabled' : 'btn btn-primary btn-block + props.loading'} type="submit" ><FontAwesomeIcon icon={faSearch}/> Search
            </button>
        </form>
    );
};

export default Search;
