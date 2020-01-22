import React, {useEffect, useState} from "react";

;

const About = () => {

    const [name, setName] = useState('Haytham');

    useEffect(() => {
        document.title = 'Weather | About';
    });

    return (
        <div className="row">
            <div className="col-12">
                <h1>About Page {name}</h1>
                <button className="btn btn-primary btn-sm" onClick={() => setName("Haytham DAHRI")}>Set Name</button>
            </div>
        </div>
    );
}

export default About;
