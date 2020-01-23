import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    const [city, setCity] = useState('');
    const [submitBtn] = useState(React.createRef());
    const [searchInput] = useState(React.createRef());

    const handleInput = (event) => {
        if (event.target.value !== "" && event.target.value.length < 40) {
            event.target.className = "form-control is-valid shadow p-3 bg-white rounded";
            setCity(event.target.value);
            submitBtn.current.disabled = false;
        } else {
            event.target.className = "form-control is-invalid shadow p-3 bg-white rounded";
            submitBtn.current.disabled = true;
        }
    }

    const handleFormSubmit = (event) => {
        // Prevent form default
        event.preventDefault();
        // Nothing to do if component still loading main data
        if (!props.loading) {
            if (searchInput.current.value !== "") {
                props.loadCityWeather(city);
                submitBtn.current.disabled = true;
            } else {
                searchInput.current.classList.add("is-invalid");
            }
        } else {
            submitBtn.current.disabled = true;
            searchInput.current.disabled = true;
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label>City name</label>
                <input type="search" disabled={props.loading || props.searchLoading} ref={searchInput} placeholder="London, Paris, Madrid, New york, Casablanca ..."
                       className="form-control shadow p-3 bg-white rounded" aria-describedby="cityNameHelp"
                       onChange={handleInput}/>
                <div className="invalid-feedback">
                    Please fill a correct city name
                </div>
                <small id="cityNameHelp" className="form-text text-muted">Search a weather's city</small>
            </div>
            <button ref={submitBtn} disabled={props.searchLoading || props.loading} className="btn btn-primary btn-block shadow-sm rounded" type="submit">
                {props.searchLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span> Loading ...
                    </>
                ) : (
                    <><FontAwesomeIcon icon={faSearch}/> Search</>
                )
                }
            </button>
        </form>
    );
};

export default Search;
