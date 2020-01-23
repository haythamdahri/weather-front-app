import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Moment from 'react-moment';
import Search from "./Search";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.API_KEY = 'a72a8a2eb463bdd3784614fc52229a70';
        this.WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}`;
        this.state = {
            cityDetails: {},
            loading: true
        }
        // Set bind
        this.loadCityWeather = this.loadCityWeather.bind(this);
    }

    componentDidMount() {
        document.title = 'Weather | Home';
        this.loadCityWeather();
    }

    loadCityWeather(cityName = 'Casablanca') {
        this.setState({loading: true});
        setTimeout(() => {
            axios.get(`${this.WEATHER_API_URL}&units=metric&q=${cityName}`)
                .then((response) => {
                    // Set Data and loading to false
                    this.setState({cityDetails: response.data, loading: false});
                })
                .catch((err) => {
                    console.log("Error occurred");
                    this.setState({cityDetails: null, loading: false});
                });
        }, 2500);
    }

    render() {
        if (this.state.cityDetails != null && !this.state.loading) {
            return (
                <div className="row">

                    <div className="col-12">
                        <Search loadCityWeather={this.loadCityWeather} loading={this.state.loading}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
                        <CityDescription cityDetails={this.state.cityDetails}/>
                    </div>
                    <div className="col-sm-12">
                        <div className="weather-card one">
                            <div className="top">
                                <div className="wrapper">
                                    <div className="mynav">
                                    </div>
                                    <h1 className="heading">{this.state.cityDetails.weather[0].description} </h1>
                                    <h3 className="location font-weight-bold">
                                        <img alt="Weather"
                                             src={'http://openweathermap.org/img/wn/' + this.state.cityDetails.weather[0].icon + '@2x.png'}/>
                                        {this.state.cityDetails.name}
                                    </h3>
                                    <p className="temp">
                                        <span className="temp-value">{this.state.cityDetails.main.temp}</span>
                                        <span className="deg">0</span>
                                        <Link to=""><span className="temp-value">C</span></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="wrapper">
                                    <ul className="forecast">
                                        <li className="active">
                                            <span className="date">Min Temperature</span>
                                            <span className="lnr lnr-sun condition">
                                            <span className="temp">{this.state.cityDetails.main.temp_min}<span
                                                className="deg"></span><span
                                                className="temp-type">C</span></span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="date">Max Temperature</span>
                                            <span className="lnr lnr-sun condition">
                                            <span className="temp">{this.state.cityDetails.main.temp_max}<span
                                                className="deg"></span><span
                                                className="temp-type">C</span></span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="date">Pressure</span>
                                            <span className="lnr lnr-sun condition">
                                            <span className="temp">{this.state.cityDetails.main.pressure}<span
                                                className="deg"></span><span
                                                className="temp-type"></span></span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="date">Humidity</span>
                                            <span className="lnr lnr-sun condition">
                                            <span className="temp">{this.state.cityDetails.main.humidity}<span
                                                className="deg"></span><span
                                                className="temp-type">%</span></span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.cityDetails != null && this.state.loading) {
            return (
                <div className="row">
                    <div className="col-12">
                        Loading ...
                    </div>
                </div>
            );
        } else {
            return (
                <div className="alert alert-warning">
                    An error occurred
                </div>
            );
        }
    }

}

const CityDescription = (props) => {
    return (
        <div>
            <h1 className="display-2 font-weight-bold text-primary text-center">{props.cityDetails.name + ' Details'}</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item p"><strong
                    className="pr-5">Name: </strong>{props.cityDetails.name}</li>
                <li className="list-group-item">
                    <strong className="pr-5">Country: </strong>{props.cityDetails.sys.country}</li>
                <li className="list-group-item"><strong
                    className="pr-5">Country: </strong>{props.cityDetails.dt}</li>
                <li className="list-group-item"><strong
                    className="pr-5">Latitude: </strong> {props.cityDetails.coord.lat}</li>
                <li className="list-group-item"><strong
                    className="pr-5">Longitude: </strong> {props.cityDetails.coord.lon}</li>
                <li className="list-group-item"><strong
                    className="pr-5">Sunrise: </strong> <Moment unix>{props.cityDetails.sys.sunrise}</Moment></li>
                <li className="list-group-item"><strong
                    className="pr-5">Sunset: </strong> <Moment unix>{props.cityDetails.sys.sunset}</Moment></li>
            </ul>
        </div>
    );
}
