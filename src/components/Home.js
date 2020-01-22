import React, {Component} from "react";
import axios from "axios";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.API_KEY = 'a72a8a2eb463bdd3784614fc52229a70';
        this.WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}`;
        this.state = {
            cityDetails: null,
            loading: true
        }
    }

    componentDidMount() {
        document.title = 'Weather | Home';
        setTimeout(() => {
            axios.get(`${this.WEATHER_API_URL}&&q=Casablanca`)
                .then((data) => {
                    // Set Data and loading to false
                    this.setState({cityDetails: data, loading: false});
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Error occurred");
                });
        }, 2500);
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading ...</div>
            )
                ;
        } else {
            return (<h5>
                {JSON.stringify(this.state.cityDetails)}
            </h5>);
        }
    }

}
